function wins() {
    win=prompt("enter wins");
    draw=prompt("enter draws");
    loss=prompt("enter loss");
    document.getElementById("i8").innerHTML= (win * 3) + (draw * 1) + (loss * 0)+" points";
}
