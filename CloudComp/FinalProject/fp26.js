/*Author: Morrison*/
addEventListener("load", main)
function main(){
    let cards = document.getElementsByClassName("card");
    let selected = [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0],[13,0],[14,0],[15,0],[16,0],[17,0],[18,0],[19,0]];
    let numColors = [0,0,0,0,0,0,0,0,0,0];
    let test = [];
    let done = [];
    let colors = ["#FF0000","#FF9333", "#5EFF33", "#33FFD7", "#3336FF", "#E633FF", "#FF339C", "#7B7B7B", "#FFAAD6", "#4D9D89"];
    let counter = -1;
    for (let c of cards) {
        counter += 1
        // assigning colors
        while (true){
            let temp = Math.floor(Math.random() * 10);
            if ((numColors[temp] !== 2)) {
                test.push(c);
                selected[test.indexOf(c)].push(colors[temp]);
                //selected[counter].push(c);
                // 'click' event
                c.addEventListener("mousedown", () => {
                    c.style.backgroundColor = colors[temp];
                    selected[test.indexOf(c)][1] = 1;
                    let check = 0;
                    //selected variable changed
                    for (let i = 0; i < 19; i++) {
                        check += selected[i][1]
                    }
                    if (check > 2){
                        for (let d of cards) {
                            selected[test.indexOf(d)][1] = 0
                            d.style.backgroundColor = "#FFFFFF";
                        }
                    }
                });
                numColors[temp] += 1;
                break;
            }
        }
        counter = -1
        // 'choosing' methods
        c.addEventListener("mouseenter", () => {
            if (selected[test.indexOf(c)][1] === 1){
                c.style.backgroundColor = selected[test.indexOf(c)][2];
            } else {
            c.style.backgroundColor = "#FFFF33";
            }
        });
        c.addEventListener("mouseleave", () => {
            if (selected[test.indexOf(c)][1] === 1){
                c.style.backgroundColor = selected[test.indexOf(c)][2];
            } else{
                c.style.backgroundColor = "#FFFFFF";
            }
        });
    }
    console.log(selected)
}