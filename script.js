
const menuBtn = document.getElementById("Hamburger");
const closeBtn = document.getElementById("close");
const mobileMenu = document.getElementById("mobilemenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});