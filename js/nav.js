(function () {
  let isOpen = false;
  const nav = document.querySelector(".show-nav");
  const menuNavBtn = document.querySelector(".menu-btn");
  menuNavBtn.addEventListener("click", function () {
    isOpen = !isOpen;
    if (isOpen) {
      this.setAttribute("src", "./images/icon-close.svg");
      nav.classList.add("show-nav-is-open");
    } else {
      this.style.color = "var (--veryDarkGray)";
      this.setAttribute("src", "./images/icon-hamburger.svg");
      nav.classList.remove("show-nav-is-open");
    }
  });
})();
