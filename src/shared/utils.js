export function render(html) {
  document.getElementById("app").innerHTML = html;
}

export function unusedFunction() {
  return "No debería aparecer en el bundle de producción";
}
