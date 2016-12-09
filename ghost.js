// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

// Page 2 - Get Modal
var kingDelmodal = document.getElementById('kingDeluxeModal'),
    kingmodal = document.getElementById('kingModal'),
    queenmodal = document.getElementById('queenModal'),
    twoQueenmodal = document.getElementById('twoQueenModal'),

// Page 2 - Get Link that Opens the Modal
    kingDelRoom = document.getElementById("kingDel"),
    kingBedRoom = document.getElementById("kingBed"),
    queenBedRoom = document.getElementById("queenBed"),
    twoQueenRoom = document.getElementById("twoQueen"),

// Page 2 - Get Span that Closes the Modal
    span1 = document.getElementsByClassName("close1")[0],
    span2 = document.getElementsByClassName("close2")[0],
    span3 = document.getElementsByClassName("close3")[0],
    span4 = document.getElementsByClassName("close4")[0],

// Page 2 - Main Section
    blur = document.getElementById("blur");

// Page 2 - Open Modal when Link is Clicked
function openModal(roomType, roomModal) {
    roomType.onclick = function() {
        blur.style.opacity = "0.3";
        roomModal.style.display = "block";
    };
} // end openModal

// Page 2 - Close Modal when X is Clicked
function closeModal(spanNum, roomModal){
    spanNum.onclick = function() {
        blur.style.opacity = "1";
        roomModal.style.display = "none";
    };
} // end closeModal

// Page 2 - Close Modal when Clicked Anywhere
function closeModal2(xModal){
    blur.style.opacity = "1";
    xModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == kingDelmodal) {
        closeModal2(kingDelmodal);
    } else if (event.target == kingmodal) {
        closeModal2(kingmodal);
    } else if (event.target == queenmodal) {
        closeModal2(queenmodal);
    } else if (event.target == twoQueenmodal) {
        closeModal2(twoQueenmodal);
    }
}; // end onclick

// Page 2 - Open Modal
openModal(kingDelRoom, kingDelmodal);
openModal(kingBedRoom, kingmodal);
openModal(queenBedRoom, queenmodal);
openModal(twoQueenRoom, twoQueenmodal);

// Page 2 - Close Modal
closeModal(span1, kingDelmodal);
closeModal(span2, kingmodal);
closeModal(span3, queenmodal);
closeModal(span4, twoQueenmodal);
