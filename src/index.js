import "./less/index.less";

// Your code goes here!

//mouseover
const navLinks = document.querySelector(".nav");

navLinks.addEventListener("mouseover", function (event) {
  event.target.style.color = "red";
});

//dbl click
const busImg = document.querySelector(".intro img");
console.log(busImg);
busImg.addEventListener("dblclick", function (e) {
  alert("Hello World!!!");
});

//mouseleave
const welcome = document.querySelector(".intro h2");

welcome.addEventListener("mouseenter", function (event) {
  event.target.style.color = "black";
});
