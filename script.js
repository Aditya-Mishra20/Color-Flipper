const colors = ["Green", "Red", "rgba(133,122,200)", "#4E4F41"]; //array of some limited colors
const btn = document.getElementById("btn"); //targeting button with its id(btn) and storing it in a const variable
const color = document.querySelector(".color"); // document.querySelector() returns the FIRST element that matches a css selector
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});     //eventListener is a procedure that waits for an event to occur and here we are adding it
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}       //generating random number and rounding off to nearest integer
