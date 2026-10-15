// Pack formats — identical to the old engine (JSON pack, Excel/CSV: question, correct, wrong1, wrong2).

export function normalizePack(n, fallbackId = "custom") {
  const items = (n.items || [])
    .map((r, i) => {
      const wrong = Array.isArray(r.wrong) ? r.wrong.filter(Boolean) : [r.wrong1, r.wrong2, r.wrong3].filter(Boolean);
      return {
        item_id: String(r.item_id || `q${String(i + 1).padStart(2, "0")}`),
        question: String(r.question || "").trim(),
        correct: String(r.correct || "").trim(),
        wrong: wrong.map((s) => String(s).trim()).filter(Boolean).slice(0, 2),
        skill_tags: r.skill_tags || n.skill_tags || [],
        audio: String(r.audio || r.audio_en || "").trim(),
      };
    })
    .filter((r) => r.question && r.correct && r.wrong.length >= 1);
  if (!items.length) throw new Error("Pack has no usable questions. Need question + correct + at least one wrong.");
  return {
    pack_id: n.pack_id || fallbackId,
    title: n.title || "Ski Jump",
    module_id: n.module_id || "ski_jump",
    activity_id: n.activity_id || "slope_jump",
    skill_tags: n.skill_tags || ["mcq"],
    ui_locale: n.ui_locale || "en",
    seconds: Number(n.seconds || 15),
    mastery_correct: Number(n.mastery_correct || 3),
    items,
  };
}

export async function fetchPack(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Could not load pack ${url}`);
  return normalizePack(await r.json());
}

export function rowsToPack(rows, title) {
  const header = (rows[0] || []).map((c) => String(c).trim().toLowerCase());
  const body = (header.includes("question") ? rows.slice(1) : rows).filter((c) => c && String(c[0] || "").trim());
  const items = body.map((r, i) => {
    const a = Array.isArray(r) ? r : Object.values(r);
    const [q, ok, w1, w2] = a.map((f) => (f == null ? "" : String(f)));
    return { item_id: `q${String(i + 1).padStart(2, "0")}`, question: q, correct: ok, wrong: [w1, w2] };
  });
  return normalizePack({ title, items, pack_id: title.toLowerCase().replace(/\s+/g, "-") });
}

export async function fileToPack(file) {
  const name = file.name || "pack";
  if (name.toLowerCase().endsWith(".json")) return normalizePack(JSON.parse(await file.text()), name);
  const XLSX = await import("xlsx"); // loaded only when a teacher drops a sheet
  const wb = XLSX.read(await file.arrayBuffer(), { type: "array" });
  const rows = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1, defval: "" });
  if (!rows.length) throw new Error("Empty spreadsheet");
  return rowsToPack(rows, name.replace(/\.[^.]+$/, ""));
}

export function shuffle(a) {
  const e = a.slice();
  for (let t = e.length - 1; t > 0; t--) {
    const r = Math.floor(Math.random() * (t + 1));
    [e[t], e[r]] = [e[r], e[t]];
  }
  return e;
}
