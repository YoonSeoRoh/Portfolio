"use strict";

//Custom Cursor move
const mouseCursor = document.querySelector(".cursor");
window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);

//Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    //스크롤이 navbar의 높이 이상으로 발생할 때
    //navbar의 classList에 class를 추가
    //navbar의 색이 변하는 class
    navbar.classList.add("navbar--dark");
  } else {
    //스크롤링이 navbar 높이보다 작으면 class 삭제
    navbar.classList.remove("navbar--dark");
  }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open"); //스크롤 시 navbar창 닫힘
  scrollIntoView(link);
});

//Custom cursor grow when it touches link
const link = document.querySelectorAll(".navbar__menu__item");
link.forEach((li) => {
  li.addEventListener("mouseover", () => {
    mouseCursor.classList.add("cursor__grow");
  });
  li.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursor__grow");
  });
});

//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

//Handle click on "contact me" button on home
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

//Make home slowly face to transparent as the window scrolls down
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
// document.addEventListener("scroll", () => {
//   console.log("1 " + window.scrollY);
//   console.log(homeHeight);
//   home.style.opacity = homeHeight / window.scrollY - 1;
// });

//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

//Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#introduction");
});

//함수 모음
function cursor(e) {
  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.style.top = e.pageY + "px";
}
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
