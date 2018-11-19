let refOffset = 0;
let visible = true;
const bannerHeight = 87;
const newOffset=0;
const bannerWrapper = document.querySelector("header");
const banner = document.querySelector(".main-navbar");
const handler = function(e) {
  console.log("fuck");
  newOffset = window.scrollY;

  if (newOffset > bannerHeight) {
    if (newOffset > refOffset) {
      bannerWrapper.classList.remove("animateIn");
      bannerWrapper.classList.add("animateOut");
    } else {
      bannerWrapper.classList.remove("animateOut");
      bannerWrapper.classList.add("animateIn");
    }
    banner.style.background = "rgba(162, 197, 35, 0.6)";
    refOffset = newOffset;
  } else {
    banner.style.backgroundColor = "rgba(162, 197, 35, 1)";
  }
};

function select(selector) {
  return document.querySelector(selector);
}
function selectAll(selector) {
  return document.querySelectorAll(".carousel-item");
}
function addListener(el, type, callback) {
  el.addEventListener(type, callback);
}
function createEl(tagName, classes, attributes) {
  if (classes === undefined) {
    classes = [];
  }
  if (attributes === undefined) {
    attributes = {};
  }

  el = document.createElement(tagName);
  if (classes.length > 0) {
    classNames = classes.join(" ");
    el.className = classNames;
  }

  if (attributes.length != {}) {
    attributesArray = Object.entries(attributes);
    attributesArray.forEach(function(item) {
      el.setAttribute(item[0], item[1]);
    });
  }
  return el;
}

document.addEventListener("DOMContentLoaded", function(e) {
  
  //navbar toggle
  const navToggle = select(".nav-toggle");
  const navbar = select(".nav-menu");
  addListener(navToggle, "click", function(e) {
    e.currentTarget.classList.toggle("active");
    navbar.classList.toggle("active");
  });

  
});
//sticky navigation scroll animation
  
window.addEventListener("scroll",handler, false);
// create slider indicators dynamically

// document.addEventListener("DOMContentLoaded", function(e) {
//   const mainSlider = select("#main-slider");
//   const slidesCount = selectAll(".carousel-item").length;
//   //create indicator wrapper
//   const ol = createEl("ol", ["carousel-indicators"]);
//   let li=createEl("li",['active'],{"data-target":"#main-slider","data-slide-to":"0"});
//   ol.appendChild(li);
//   //create indicators
//   for (let i=1;i<slidesCount;i++){
//     let li=createEl("li",[],{"data-target":"#main-slider","data-slide-to":i});
//     ol.appendChild(li);
//   }

//   //append indicators to slider wrapper
//   mainSlider.prepend(ol);
// });
