const color = ["yellow","green","blue"]

function generateNumber() {
    return  Math.floor(Math.random ()* color.length);
}

function setBgcolor() {
const randomNumber = generateNumber();
document.getElementById("bg").style.backgroundColor= color[randomNumber];
document.getElementById("bgcolor").innerHTML = color[randomNumber];

}

document.getElementById("bgbutton").addEventListener("click",setBgcolor);