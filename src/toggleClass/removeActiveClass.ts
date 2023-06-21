export function removeActiveClass() {
  const activEl = document.querySelector(".active");
  if (activEl) {
    activEl.classList.remove("active");
  }
}
