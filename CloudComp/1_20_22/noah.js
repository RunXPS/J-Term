/*Author: Morrison*/

addEventListener("load", main);
function main(){
    let numberSlot = document.createElementById("numberSlot");
    let enterButton = document.getElementById("enterButton");
    let cubeTable = document.getElementById("cubeTable")
    enterButton.addEventListener("click", () => {
        let x = numberSlot.value;
        numberSlot.value = ""
        let y = Number(x);
        cubeTable.innerHTML += `<tr><td>${y}</td><td>${y**3}</td></tr>`
    });
}