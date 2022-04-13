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

//click
const bodySection = document.querySelector(".footer");
bodySection.addEventListener("click", function (event) {
  event.target.style.fontWeight = "bold";
});
