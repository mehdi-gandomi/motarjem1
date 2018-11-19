function select(selector){
  return document.querySelector(selector);
}
function addListener(el,type,callback){
  el.addEventListener(type,callback);
}
const navToggle=select(".nav-toggle");
const navbar=select(".nav-menu");
addListener(navToggle,"click",function(e){
  e.currentTarget.classList.toggle("active");
  navbar.classList.toggle("active");
})