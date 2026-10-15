import "@fontsource/fredoka/latin-500.css";
import "@fontsource/fredoka/latin-700.css";
import "./style.css";
import { fetchPack, fileToPack, normalizePack } from "./pack.js";
import { startGame } from "./game.js";

const app = document.getElementById("app");
const qs = new URLSearchParams(location.search);
const student = (qs.get("student") || "").trim();
const packParam = qs.get("pack") || "";
const sessionMode = packParam === "session";

async function loadPack() {
  if (sessionMode) {
    // Opened from Word Master: only the words Word Master handed over. No fallback, no picker.
    const raw = sessionStorage.getItem("mrj.wm.gamepack");
    if (!raw) throw new Error("Open Ski Jump from Word Master to get your words.");
    return normalizePack(JSON.parse(raw));
  }
  if (packParam) { try { return await fetchPack(packParam); } catch (e) {} }
  // Standalone default pack is named in index.html (Word Master's copy has none: session words only).
  const meta = document.querySelector('meta[name="sj-default-pack"]');
  if (!meta) throw new Error("Open Ski Jump from Word Master to get your words.");
  return fetchPack(meta.content);
}

async function boot() {
  const pack = await loadPack();
  const q = qs.get("q");
  const game = startGame(app, { pack, studentId: student, sessionMode, quality: q === "low" || q === "high" || q === "ultra" ? q : undefined });
  if (sessionMode) return;
  const input = document.getElementById("lf-file");
  const drop = input && input.closest("label");
  const lead = document.querySelector("#sj-start .lead");
  async function take(file) {
    try {
      const p = await fileToPack(file);
      game.loadPack(p);
      if (lead) lead.textContent = `Loaded ${p.title} · ${p.items.length} questions.`;
    } catch (err) { if (lead) lead.textContent = "Could not read that pack: " + err.message; }
  }
  input && input.addEventListener("change", () => input.files[0] && take(input.files[0]));
  if (drop) {
    drop.addEventListener("dragover", (ev) => { ev.preventDefault(); drop.classList.add("over"); });
    drop.addEventListener("dragleave", () => drop.classList.remove("over"));
    drop.addEventListener("drop", (ev) => { ev.preventDefault(); drop.classList.remove("over"); ev.dataTransfer.files[0] && take(ev.dataTransfer.files[0]); });
  }
}
boot().catch((err) => {
  app.innerHTML = `<div class="fatal"><h2>Ski Jump</h2><p></p></div>`;
  app.querySelector(".fatal p").textContent = err.message;
});
