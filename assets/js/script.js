function menuShow() {
  const menuToggle = document.querySelector(".menu-button");
  const nav = document.querySelector("nav ul");
  const close = document.querySelector(".close");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("slide");
  });

  close.addEventListener("click", function () {
    nav.classList.remove("slide");
  });
}
menuShow();

function scrollNavbar() {
  const navbar = document.getElementById("navbar");

  if (this.scrollY >= 50) {
    navbar.classList.add("scroll-navbar");
  } else {
    navbar.classList.remove("scroll-navbar");
  }
}
window.addEventListener("scroll", scrollNavbar);
