"use strict";

/* ========== Id's =========== */
// Primary menu
const primaryMenu = document.getElementById("primary-menu");
// Primary list
const primaryList = document.getElementById("primary-list");
// Toggle on Primary menu
const navPrimaryToggle = document.getElementById("primary-toggle");
// Sticky Header
const header = document.getElementById("header");
// Home slide prev
const homeSlidePrev = document.getElementById("slide-prev");
// Home slide prev
const homeSlideNext = document.getElementById("slide-next");
// Video file
const videoFile = document.getElementById("video-file");
// Video play button
const videoButton = document.getElementById("video-button");
// Video play Icon
const videoIcon = document.getElementById("video-icon");
// Show info button
const infoButton = document.getElementById("info-button");
// Video overlay
const videoOverlay = document.getElementById("video-overlay")
// Video overlay close
const videoOverlayClose = document.getElementById("video-close");

/* ========== Classes =========== */
// Primary menu links
const primaryLinks = document.querySelectorAll(".nav__primary-link");
// Home slide
const homeSlide = document.querySelectorAll(".home__slide");
// Show video info class
const videoInfo = document.querySelector(".video__article");


// EVENT LISTENERS
eventListeners();

// ALL EVENT LISTENERS
function eventListeners() {
  // Toggle Primary menu
  navPrimaryToggle.addEventListener("click", showPrimaryMenu);
  // Close Primary menu when link is clicked
  primaryLinks.forEach((link) => link.addEventListener("click", linkAction));
  // Sticky Header
  window.addEventListener("scroll", headerScroll);
  // Previous slide
  homeSlidePrev.addEventListener("click", prevSlide);
  // Next slide
  homeSlideNext.addEventListener("click", nextSlide);
  // Video player
  videoButton.addEventListener("click", playPauseVideo);
  // Video end
  videoFile.addEventListener("ended", videoEnded);
  // Show info button
  infoButton.addEventListener("click", showInfo);
  // Close overlay
  videoOverlayClose.addEventListener("click", closeOverlay);
  // SCROLL TO TOP
  window.addEventListener("scroll", calcScrollValue);
  window.addEventListener("load", calcScrollValue);
}

/* ====== TOGGLE ON/OFF PRIMARY MENU ====== */

// Show Primary menu
function showPrimaryMenu() {
  navPrimaryToggle.classList.toggle("toggle-active");

  // Close Primary menu
  if (navPrimaryToggle.classList.contains("toggle-active")) {
    primaryMenu.classList.add("show-primary");
    primaryList.classList.add("fade-in");
  } else {
    primaryMenu.classList.remove("show-primary");
    primaryList.classList.remove("fade-in");
  }
}

// Close Primary menu when link is clicked
function linkAction() {
  primaryMenu.classList.remove("show-primary");
  primaryList.classList.remove("fade-in");
  navPrimaryToggle.classList.remove("toggle-active");
}

/* ====== STICKY HEADER ====== */
function headerScroll() {
  this.scrollY >= 10
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");
}

/* ====== SLIDER ====== */

let currentSlide = 0;

function showImg(e) {
  // Remove active class from all slides
  homeSlide.forEach((slide) => {
    slide.classList.remove("active");
  })
  // Add active class to current slide
  homeSlide[e].classList.add("active");
}

function prevSlide() {
  if (currentSlide <= 0) {
    currentSlide = homeSlide.length - 1;
  } else {
    currentSlide--;
  }
  showImg(currentSlide);
}

function nextSlide() {
  if (currentSlide < homeSlide.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  showImg(currentSlide);
}

// Next image after 10s
setInterval(() => {
  nextSlide();
}, 10000);

/* ====== PLAY/PAUSE VIDEO ====== */
// Video player start/pause
function playPauseVideo() {
  if (videoFile.paused) {
    // Play video
    videoFile.play();

    videoFile.classList.add("active");
    videoIcon.classList.add("bx-pause");
    videoIcon.classList.remove("bx-play");
    infoButton.style.opacity = "0";
  } else {
    // Pause video
    videoFile.pause();

    videoIcon.classList.remove("bx-pause");
    videoIcon.classList.add("bx-play");
  }
}

// Video player ends
function videoEnded() {
  videoIcon.classList.remove("bx-pause");
  videoIcon.classList.add("bx-play");
  videoFile.classList.remove("active");
  infoButton.style.opacity = "1";
}

function showInfo() {
  videoInfo.classList.add("active");
  videoOverlay.classList.add("active");
}

function closeOverlay() {
  videoInfo.classList.remove("active");
  videoOverlay.classList.remove("active");
}


/* ====== SCROLL TO TOP ====== */
function calcScrollValue() {
  const scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  pos > 100
    ? scrollProgress.classList.add("active")
    : scrollProgress.classList.remove("active")
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(var(--clr-blue-700) ${scrollValue}%, var(--clr-blue-400) ${scrollValue}%)`;
}

/* ====== AOS ANIMATIONS ====== */

/*========== SCROLL REVEAL ANIMATION ==========*/

AOS.init({
  offset: 400,
  duration: 1000,
  easing: "ease",
  once: true,
});