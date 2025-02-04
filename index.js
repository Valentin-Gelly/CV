$(function () {
  var shrinkHeader = 150;
  $(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= shrinkHeader) {
      $("#header").addClass("shrink");
    } else {
      $("#header").removeClass("shrink");
    }
  });
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});

$(document).ready(function () {
  // Show or hide the sticky footer button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#goTop").fadeIn(200);
    } else {
      $("#goTop").fadeOut(200);
    }
  });

  // Animate the scroll to top
  $("#goTop").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 300);
  });
});

$("html, body").animate({}, 300);

let download = document.getElementById("download");
let imageDownload = document.getElementById("imageDownload");
download.addEventListener("click", function () {
  imageDownload.src = "./assets/logo/check.png";
});

(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".sectionActicle");

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  };

  const run = () => {
    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add("visible");
        section.classList.remove("hidden");
      } else {
        section.classList.remove("visible");
        section.classList.add("hidden");
      }
    });
  };

  window.addEventListener("scroll", run);
  run(); // Run once on load to catch already visible sections
});

let input = document.getElementsByName("accordion");
for (let i = 0; i < input.length; i++) {
  input[i].onclick = function () {
    let id = input[i].id.split("-")[1];
    let plus = document.getElementById(`plus${id}`);
    plus.innerHTML = input[i].checked ? "-" : "+";
  };
}

// hover carousel-cell class element and show h3 on the section
let carouselCell = document.getElementsByClassName("carousel-cell");
let section = document.getElementsByClassName("h3");
for (let i = 0; i < carouselCell.length; i++) {
  let id = carouselCell[i].id;
  carouselCell[i].onmouseover = function () {
    carouselCell[i].style.borderRadius = "35px";
    carouselCell[i].style.filter = "drop-shadow(0 0 10px #000)";
    document.getElementById(`h3-${id}`).style.display = "block";
    document.getElementById(`h3-${id}`).style.backgroundColor = "white";
    document.getElementById(`h3-${id}`).style.borderRadius = "35px";
    document.getElementById(`h3-${id}`).style.opacity = "0.7";
    carouselCell[i].getElementsByTagName("h3")[0].style.display = "block";
  };
  carouselCell[i].onmouseout = function () {
    carouselCell[i].style.borderRadius = "0";
    carouselCell[i].style.filter = "unset";
    carouselCell[i].style.backgroundColor = "white";
    document.getElementById(`h3-${id}`).style.display = "none";
    document.getElementById(`h3-${id}`).style.borderRadius = "35px";
    carouselCell[i].getElementsByTagName("h3")[0].style.display = "none";
  };
}

document.getElementById("burgerMenu").addEventListener("click", function () {
  let nav = document.getElementsByClassName("menu")[0];
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
});
