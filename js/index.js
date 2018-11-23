
function select(selector) {
  return document.querySelector(selector);
}
function selectAll(selector) {
  return document.querySelectorAll(selector);
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

let refOffset = 0;
let visible = true;
const bannerHeight = 87;
let newOffset=0;
const bannerWrapper = select("header");
const banner =select(".main-navbar");
const body=select("body");
const mainSlider=select("#main-slider");
function handleStickyNavbar(){
  if (newOffset > bannerHeight) {
    if (newOffset > refOffset) {
      banner.classList.add("sticky");
      banner.classList.remove("animateIn");
      banner.classList.add("animateOut");
    } else {
      banner.classList.add("sticky");
      banner.classList.remove("animateOut");
      banner.classList.add("animateIn");
      // if(newOffset<refOffset){
      //   setTimeout(function(){
      //     banner.classList.remove("animateIn");
      //     banner.classList.add("animateOut");
      //   },5000);
      // }
    }
    banner.style.background = '#071e3d';
    refOffset = newOffset;
  }
  else{
    // banner.style.transition="";
    banner.classList.remove("sticky");
    banner.classList.remove("animateIn");
    banner.classList.remove("animateOut");
  }
  
}

function handleHiringSection(){
    // animate hire translator section

    if(newOffset>=1000){
      selectAll(".animation-wrap__item").forEach(function(el){
        el.classList.add("animate");
      })
     
    }
}

function handleTelegramAd(){
  if(newOffset>=820){
    select(".telegram-ad__image").classList.add("animate");
    select(".telegram-ad__title").classList.add("animate");
    select(".telegram-ad__subtitle").classList.add("animate");
    select(".telegram-ad__content").classList.add("animate");
    selectAll(".telegram-ad__action__button").forEach(function(el){
      el.classList.add("animate");
    })
  }
}

const handler = function(e) {
  newOffset = e.currentTarget.scrollTop;
  handleStickyNavbar();
  handleHiringSection();
  handleTelegramAd();
};



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
  
body.addEventListener("scroll",handler, false);
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
