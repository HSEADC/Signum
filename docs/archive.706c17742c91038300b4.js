/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

var tiltElements = document.querySelectorAll(".tilt");
tiltElements.forEach(function (element) {
  element.addEventListener("mousemove", function (e) {
    var offsetWidth = element.offsetWidth,
      offsetHeight = element.offsetHeight;
    var _element$getBoundingC = element.getBoundingClientRect(),
      left = _element$getBoundingC.left,
      top = _element$getBoundingC.top;
    var x = e.clientX - left;
    var y = e.clientY - top;
    var xMove = (x / offsetWidth * 2 - 1) * 20;
    var yMove = (y / offsetHeight * 2 - 1) * -20;
    element.style.transform = "perspective(500px) rotateY(".concat(xMove, "deg) rotateX(").concat(yMove, "deg)");
  });
  element.addEventListener("mouseleave", function () {
    element.style.transform = "perspective(500px) rotateY(0deg) rotateX(0deg)";
  });
});
/******/ })()
;