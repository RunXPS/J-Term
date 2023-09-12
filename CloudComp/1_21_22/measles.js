/*Author: Morrison*/
addEventListener("load", main)
function main(){
    let surface = document.getElementById("surface");
    let pen = surface.getContext("2d");
    let currentColor = "black";
    let redButton = document.getElementById("redButton");
    let greenButton = document.getElementById("greenButton");
    let blueButton = document.getElementById("blueButton");
    let erase = document.getElementById("erase");
    let sizeSlider = document.getElementById("sizeSlider");
    let slider_number = document.getElementById("slider_number");
    slider_number.innerHTML = 100;
    let currentSize = 100;
    sizeSlider.addEventListener("input", () => {
        
        currentSize = Number(sizeSlider.value);
        slider_number.innerHTML = currentSize;
    });
    redButton.addEventListener("click", () => {
        currentColor = "red";
    });
    greenButton.addEventListener("click", () => {
        currentColor = "green";
    });
    blueButton.addEventListener("click", () => {
        currentColor = "blue";
    });
    erase.addEventListener("click", () => {
        currentColor = "white";
    });
    surface.addEventListener("click", (e) => {
        pen.fillStyle = currentColor
        pen.fillRect(e.offsetX -(currentSize/2), e.offsetY -(currentSize/2), currentSize, currentSize);
    });
}