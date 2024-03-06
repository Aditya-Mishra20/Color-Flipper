const rgb = [];
for(let i=0; i<255; i++){
    rgb.push(i);
}
// rgb(0,0,0)
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function(){
    let rgbColor = 'rgb('+rgb[getRandomNumber()]+','+rgb[getRandomNumber()]+','+rgb[getRandomNumber()]+')';
    color.textContent = rgbColor;
    document.body.style.backgroundColor = rgbColor;
})

function getRandomNumber(){
    return Math.floor(Math.random()* rgb.length);
}