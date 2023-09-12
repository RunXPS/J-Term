/*Author: Morrison*/
addEventListener("load", main)
function main(){
    let cards = document.getElementsByClassName("card");
    let selected = [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0],[13,0],[14,0],[15,0],[16,0],[17,0],[18,0],[19,0]];
    let numColors = [0,0,0,0,0,0,0,0,0,0];
    let cardList = [];
    let done = [];
    let colors = ["#FF0000","#FF9333", "#5EFF33", "#33FFD7", "#3336FF", "#E633FF", "#FF339C", "#7B7B7B", "#FFAAD6", "#4D9D89"];
    for (let c of cards) {
        // assigning colors
        while (true){
            let temp = Math.floor(Math.random() * 10);
            if ((numColors[temp] !== 2)) {
                cardList.push(c);
                selected[cardList.indexOf(c)].push(colors[temp]);
                // 'click' event
                c.addEventListener("mousedown", () => {
                    c.style.backgroundColor = colors[temp];
                    //adding to done and changing selected
                    selected[cardList.indexOf(c)][1] = 1;
                    done.push(selected[cardList.indexOf(c)][0]);
                    let check = 0;
                    // selected variable reset
                    for (let i = 0; i < 19; i++) {
                        check += selected[i][1];
                    }
                    //when the 3 block has been selected, check
                    if (check >= 2){
                        //done.pop();
                        if ((selected[done[done.length-1]][2] === selected[done[done.length-2]][2]) === false) {
                            done.pop();
                            done.pop();
                        }
                        for (let d of cards) {
                            selected[cardList.indexOf(d)][1] = 0;
                            if (done.indexOf(selected[cardList.indexOf(d)][0]) !== -1){
                                d.style.backgroundColor = selected[cardList.indexOf(d)][2];
                            } else {
                                d.style.backgroundColor = "#FFFFFF";
                            }
                        }
                    }
                    if (done.length === 20){
                        console.log("you did it!");
                    }
                });
                numColors[temp] += 1;
                break;
            }
        }
        // 'choosing' methods
        c.addEventListener("mouseenter", () => {
            if (selected[cardList.indexOf(c)][1] === 1 || done.indexOf(selected[cardList.indexOf(c)][0]) !== -1){
                c.style.backgroundColor = selected[cardList.indexOf(c)][2];
            } else {
                c.style.backgroundColor = "#FFFF33";
            }
        });
        c.addEventListener("mouseleave", () => {
            if (selected[cardList.indexOf(c)][1] === 1 || done.indexOf(selected[cardList.indexOf(c)][0]) !== -1) {
                c.style.backgroundColor = selected[cardList.indexOf(c)][2];
            } else{
                c.style.backgroundColor = "#FFFFFF";
            }
        });
    }
}