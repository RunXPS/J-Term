/*Author: Morrison*/
addEventListener("load", main);
function main()
{
    let surface = document.getElementById("surface");
    let pen = surface.getContext("2d");
    let widthSlider = document.getElementById("widthSlider");
    let widthShow = document.getElementById("widthShow");
    let colorChooser = document.getElementById("colorChooser");
    let bgColorChooser = document.getElementById("bgColorChooser");
    let drawing = false;
    let curve = []
    let currentColor = "#000000";
    let currentWidth = 1;
    surface.addEventListener("mousedown", (e) => {
        curve = new Curve(currentColor, currentWidth);
        curve.push(new Point(e.offsetX, e.offsetY));
        drawing = true;
    });
    surface.addEventListener("mousemove", (e) => {
        if(drawing){
            curve.push(new Point(e.offsetX, e.offsetY));
            curve.draw(pen);
        }
    });
    surface.addEventListener("mouseup", (e) => {
        curve.push(new Point(e.offsetX, e.offsetY));
        curve.draw(pen);
        drawing = false;
    });
    widthSlider.addEventListener("input", () => {
        currentWidth = Number(widthSlider.value);
        widthShow.innerText = widthSlider.value;
    });
    colorChooser.addEventListener("input", () => {
        currentColor = colorChooser.value;
    });
    bgColorChooser.addEventListener("input", () => {
        backgroundColor = bgColorChooser.value;
        //draw Bg
        pen.fillStyle = backgroundColor;
        pen.fillRect(0, 0, surface.width, surface.height);
        //refresh the shapes
        for(let c of curves) {
            c.draw(pen);
        }
    });
}