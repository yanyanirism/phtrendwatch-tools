// Shared helpers for every calculator page. Each page script calls calc.bind(formId, fn).
const calc = {
  num(id) {
    const v = parseFloat(String(document.getElementById(id).value).replace(/,/g, ""));
    return Number.isFinite(v) ? v : NaN;
  },
  val(id) {
    return document.getElementById(id).value;
  },
  money(x) {
    return x.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  },
  round(x, dp = 2) {
    return x.toLocaleString(undefined, { maximumFractionDigits: dp });
  },
  show(id, html) {
    document.getElementById(id).innerHTML = html;
  },
  bind(formId, fn) {
    const form = document.getElementById(formId);
    const run = () => {
      try { fn(); } catch (e) { console.error(e); }
    };
    form.addEventListener("input", run);
    form.addEventListener("change", run);
    form.addEventListener("submit", (e) => { e.preventDefault(); run(); });
    run();
  },
};
