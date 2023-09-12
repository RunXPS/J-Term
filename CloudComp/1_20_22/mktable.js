/*Author: Morrison*/
addEventListener("load", main);
function main (){
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let step = document.getElementById("step");
    let enterButton = document.getElementById("enterButton");
    let reply = document.getElementById("reply");


    enterButton.addEventListener("click", ()=> {
        let begin = Number(start.value);
        start.value = ""
        let end = Number(stop.value)
        stop.value = ""
        let up = Number(step.value)
        step.value = ""
        buildTable(begin, end, up, x=> x*x*x)
    });
    function parseFunciton(x){
        let fun = document.getElementById("fun");
        let out = eval(fun.value);
        //fun.value = ""
        return out;
    }
    function buildTable(start, stop, step){
        let reply = document.getElementById("reply");
        reply.innerHTML = "";
        for (let i = start; i <= stop; i += step){
            reply += `<tr><td>${i}</td><td>${f(i)}</td></tr>`;
        }
    }
}