export function isMrjTeacher() {
  try {
    const api = globalThis.MRJSignin || globalThis.MRJ_AUTH;
    return !!(api && typeof api.isTeacher === "function" && api.isTeacher());
  } catch {
    return false;
  }
}

export function onMrjTeacher(fn) {
  if (typeof document === "undefined") return;
  document.addEventListener("mrj-teacher", () => {
    try {
      fn();
    } catch {
      /* ignore */
    }
  });
}
