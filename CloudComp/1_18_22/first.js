addEventListener("load",main);
function main(){
    let butt = document.getElementById("butt");
    let spot = document.getElementById("spot");
    
    butt.addEventListener("click",function(){
        spot.innerHTML = "The button got pushed.";
    });
}