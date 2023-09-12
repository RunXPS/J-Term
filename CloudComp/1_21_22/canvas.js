/*Author: Morrison*/
addEventListener("load", main);
function main() {
    let surface = document.getElementById("surface");
    let pen = surface.getContext("2d");
    pen.fillStyle = "Red";
    pen.fillRect(100,100,100,100);
    pen.strokeStyle = "blue";
    pen.strokeRect(200,200,100,100);
    pen.strokeStyle = "#00FF00";
    onemptied.lineWidth = 10;
    pen.beginPath();
    pen.moveTo(100,100);
    pen.lineTo(100,200);
    pen.stroke();
    pen.beginPath();
    pen.arc(400);
    
}