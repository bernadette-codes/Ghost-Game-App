/**
 * Created by Bernadette on 2/8/2016.
 */
// Copyright Year
var d = new Date();
var n = d.getFullYear();
document.getElementById("year").innerHTML = n;

// Declare ghost
var loc = document.getElementById("ghost");


// Get Ghost Location
function newLoc() {
    //Get Top
    var windowHeight=$(window).height();
    var y = Math.floor((Math.random() * windowHeight) + 1);
    if (y <= 150){
        heightLoc=y+151;
    } else if (y >= windowHeight-150) {
        heightLoc=y-151;
    } else {
        heightLoc = y;
    }

    //Get Left
    var windowWidth=$(window).width();
    var x = Math.floor((Math.random() * windowWidth) + 1);
    if (x <= 150){
        widthLoc=x+151;
    } else if (x >= windowWidth-150) {
        widthLoc=x-151;
    } else {
        widthLoc = x;
    }
}

// Start Button
function start(){
    document.getElementById("startButton").style.visibility="hidden";
    showGhost();

    setTimeout(timer, 7000)
    function timer() {
        document.getElementById("ghost").style.display="none";
        document.getElementById("ghostFinal").style.visibility="visible";
    }
}

// Show Ghost
function showGhost() {
    setTimeout(next, 800);
    function next() {
        newLoc();
        loc.style.top = heightLoc + "px";
        loc.style.left = widthLoc + "px";
        loc.style.visibility = "visible";
    }
}

// Click Ghost
function onClick() {
    loc.style.visibility = "hidden";
    showGhost();
}
