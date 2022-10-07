const sidebar = document.querySelector(".sidebar");
const closebtn = document.getElementById("closebtn");
const menuIcon = document.querySelector(".menu-icon");
const aboutPage = document.querySelector(".about-page");
const contactPage = document.querySelector(".contact-page");

const homeButton = document.querySelector(".home");

function requestPermission() {
  Notification.requestPermission().then((perm) => {
    alert(perm);
  });
}
const not = new Notification("Hello There");

menuIcon.addEventListener("click", openMenu);
function openMenu() {
  sidebar.classList.add("translate");
}
closebtn.addEventListener("click", closeMenu);
function closeMenu() {
  sidebar.classList.remove("translate");
}

// About section
function openAbout() {
  aboutPage.classList.add("vision");
  sidebar.classList.remove("translate");
  document.body.style.visibility = "hidden";
}
function removeAbout() {
  aboutPage.classList.remove("vision");
  sidebar.classList.remove("translate");
  document.body.style.visibility = "visible";
}

//Contact Section
function openContact() {
  contactPage.classList.add("vision");
  sidebar.classList.remove("translate");
  document.body.style.visibility = "hidden";
}
function removeContact() {
  contactPage.classList.remove("vision");
  sidebar.classList.remove("translate");
  document.body.style.visibility = "visible";
}
