const sidebar = document.querySelector(".sidebar");
const closebtn = document.getElementById("closebtn");
const menuIcon = document.querySelector(".menu-icon");
const aboutPage = document.querySelector(".about-page");
const aboutButton = document.querySelector("#about-btn");
const homeButton = document.querySelector(".home");
menuIcon.addEventListener("click", openMenu);
function openMenu() {
  sidebar.classList.add("translate");
}
closebtn.addEventListener("click", closeMenu);
function closeMenu() {
  sidebar.classList.remove("translate");
}
// aboutButton.addEventListener("click", aboutOpen);
// function aboutOpen() {
//   alert("hi");
// }
function openAbout() {
  aboutPage.classList.add("vision");
  sidebar.classList.remove("translate");
}
function remove() {
  aboutPage.classList.remove("vision");
  sidebar.classList.remove("translate");
}
// homeButton.addEventListener("click", () => {
//   aboutPage.innerHTML = "hidden";
// });
