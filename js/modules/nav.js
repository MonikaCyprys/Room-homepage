export default function navigation() {
  let isOpen = false;
  const nav = document.querySelector(".nav__menu");
  const menuNavBtn = document.querySelector(".nav__btn");
  menuNavBtn.addEventListener("click", function () {
    isOpen = !isOpen;
    if (isOpen) {
      this.setAttribute("src", "./images/icon-close.svg");
      nav.classList.add("nav__menu--active");
    } else {
      this.style.color = "var (--veryDarkGray)";
      this.setAttribute("src", "./images/icon-hamburger.svg");
      nav.classList.remove("nav__menu--active");
    }
  });
}
