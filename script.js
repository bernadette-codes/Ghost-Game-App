// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

// Declare ghost
var $loc = $("#ghost");

// Show Ghost
function showGhost() {
    setTimeout(next, 800);

    // Get New Location
    function next() {
        newLoc();
        $loc.css("top", heightLoc + "px");
        $loc.css("left", widthLoc + "px");
        $loc.css("visibility", "visible");
    } // end next
} // end showGhost function

// Click Ghost
function clickGhost() {
    $loc.css("visibility", "hidden");
    showGhost();
}

// Get Ghost Location
function newLoc() {
    var windowHeight = $(window).height(),
        y = Math.floor((Math.random() * windowHeight) + 1),
        windowWidth = $(window).width(),
        x = Math.floor((Math.random() * windowWidth) + 1);

    // Get Y Position
    if (y <= 150){
        heightLoc = y + 151;
    } else if (y >= windowHeight - 150) {
        heightLoc = y - 151;
    } else {
        heightLoc = y;
    }

    // Get X Position
    if (x <= 150){
        widthLoc = x + 151;
    } else if (x >= windowWidth - 150) {
        widthLoc = x - 151;
    } else {
        widthLoc = x;
    }
} // end newLoc function

$(document).ready(function(){

// Start Button
    $("#startButton").on('click', function(){
        $(this).remove();
        showGhost();

        // Show Final Ghost
        setTimeout(timer, 16000);
        function timer() {
            $($loc).css('display', 'none');
            $('#ghostFinal').css('visibility', 'visible');
        } // end timer
    });

    $($loc).on('click', function(){
        clickGhost();
    });
});
