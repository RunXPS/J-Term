/*Author: Morrison*/
addEventListener("load", main)
function main() {
    //state
    let shapes = [];
    let currentShape = "SQUARE";   //fake enum
    let currentSize = 100;
    let currentColor = "black";
    let backgroundColor = "#FFFFFF";
    let colorChooser = document.getElementById("colorChooser");
    let bgColorChooser = document.getElementById("bgColorChooser");
    bgColorChooser.value = backgroundColor;
    let surface = document.getElementById("surface");
    let pen = surface.getContext("2d");
    let sizeSlider = document.getElementById("sizeSlider");
    let sizeSpot = document.getElementById("sizeSpot");
    let squareButton = document.getElementById("squareButton");
    let circleButton = document.getElementById("circleButton");
    let triangleButton = document.getElementById("triangleButton")
    sizeSpot.innerText = 100;
    colorChooser.addEventListener("input", () => {
        currentColor = colorChooser.value;
    });
    bgColorChooser.addEventListener("input", () => {
        backgroundColor = bgColorChooser.value;
        //draw Bg
        pen.fillStyle = backgroundColor;
        pen.fillRect(0, 0, surface.width, surface.height);
        //refresh the shapes
        for(let s of shapes) {
            s.fill(pen);
        }
    });
    surface.addEventListener("click", (e) => {
        if(currentShape === "SQUARE") {
            s = new Square(e.offsetX, e.offsetY, currentSize, currentColor);
        }
        else if (currentShape === "CIRCLE") {
            s = new Circle(e.offsetX, e.offsetY, currentSize, currentColor);

        }
        else if (currentShape === "TRIANGLE") {
            s = new Triangle(e.offsetX, e.offsetY, currentSize, currentColor);
        }
        shapes.push(s);
        s.fill(pen);
    }); 
    sizeSlider.addEventListener("input", () => {
        sizeSpot.innerText = sizeSlider.value;
        currentSize = Number(sizeSlider.value);
    });
    squareButton.addEventListener("click", () => currentShape="SQUARE");
    circleButton.addEventListener("click", () => currentShape="CIRCLE");
    triangleButton.addEventListener("click", () => currentShape="TRIANGLE");
}