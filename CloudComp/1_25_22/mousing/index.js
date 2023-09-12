/*Author: Morrison*/
addEventListener("load", main);
function main() {
    let bricks = document.getElementsByClassName("brick");
    for (let b of bricks) {
        b.addEventListener("mouseenter", () => {
            b.style.backgroundColor = "yellow";
        });
        b.addEventListener("mouseleave", () => {
            b.style.backgroundColor = "white";
        });
    }
    let demoBlock = document.getElementById("demoBlock");
    demoBlock.addEventListener("mouseover", () => {
        demoBlock.style.color = ("#CC0000");
    });
    demoBlock.addEventListener("mousedown", () => {
        demoBlock.style.color = ("#99BADD");
    });
    demoBlock.addEventListener("mouseup", () => {
        demoBlock.style.color = ("#CC0000");
    });
}