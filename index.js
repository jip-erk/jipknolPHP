const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

const w = canvas.width = canvas.clientWidth;
//document.body.offsetWidth
const h = canvas.height = canvas.clientHeight;
const cols = Math.floor(w / 1) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

function matrix() {
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = '#0f0';
    ctx.font = '15pt monospace';

    ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 15;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 15;
    });
}

setInterval(matrix, 50);

function winresise() {
    const w = canvas.width = canvas.clientWidth;
    const h = canvas.height = canvas.clientHeight;
}

window.onresize = winresise;

//Always set focus and select

var input = document.getElementById('input');







//drag 

//dragElement(document.getElementById("console"));


var drag = document.querySelectorAll(".dragable");
var dragHeader = document.querySelectorAll(".dragger");

for (var i = 0; i < drag.length; i++) {
    var but2 = drag[i];
    var but3 = dragHeader[i];
    dragElement(but2);

}




function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById("mydivheader")) {
        /* if present, the header is where you move the DIV from:*/


        but3.onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        but2.onmousedown = dragMouseDown;

    }


    function dragMouseDown(e) {
        if (elem = document.getElementById("console")) {
            input.focus();
        }



        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {

        input.focus();


        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }


}

//toggle close and open

var buttons = document.querySelectorAll(".close");
var buttons2 = document.querySelectorAll(".close2");
var buttons3 = document.querySelectorAll(".close3");
var buttons4 = document.querySelectorAll(".close4");

for (var i = 0; i < buttons.length; i++) {
    var but = buttons[i];
    but.onclick =

        function hideConsole() {
            var x = document.getElementById("console");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }

}

for (var i = 0; i < buttons2.length; i++) {
    var but = buttons2[i];
    but.onclick =

        function hideConsole() {
            var x = document.getElementById("console2");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }

}


for (var i = 0; i < buttons3.length; i++) {
    var but = buttons3[i];
    but.onclick =

        function hideConsole() {
            var x = document.getElementById("cam");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }

}

for (var i = 0; i < buttons4.length; i++) {
    var but = buttons4[i];
    but.onclick =

        function hideConsole() {
            var x = document.getElementById("files");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }

}



var ip;
var ipp = document.getElementById('ipp');

var currentPath;

window.onload = async function() {
    let data = await getIPs()
    for (let i = 0; i < data.length; i++) {
        // document.getElementById('ipp').innerHTML += `<li>${data[i]}</li>`
        console.log(data[i]);
        ip = data[i];
    }
    GetLocation();
    var path = document.getElementById("path");
    path.innerHTML = "C:\\users\\" + ip + ">";
    currentPath = "C:\\users\\" + ip + ">";
}



function GetLocation() {

    var table = ''
    $.getJSON("http://ip-api.com/json/" + ip, function(data) {
        $.each(data, function(key, value) {
            table += '> ' + key + ': ' + value + '<br>';

        });
        $("#results").html(table);
        console.log(table);

    });
}

//Selector for your <video> element
const video = document.querySelector('#myVidPlayer');

function snapshot() {
    context.fillRect(0, 0, w, h);
    context.drawImage(video, 0, 0, w, h);
    canvas.style.display = "block";
}


//Core
window.navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.onloadedmetadata = (e) => {
            video.play();
        };
    })
    .catch(() => {
        alert('You have give browser the permission to run Webcam and mic ;( ');
    });





//animation

//var el = document.getElementById('str');
var scan;
const scanString = ["Scanning hairline", "looking for moles", "comparing faces"];







//console input 
var elem = document.getElementById('data');


var Input = document.getElementById("input").onkeydown = function time(e) {
    if (e.keyCode == 13) {


        GetLocation();



        var inputVal = document.getElementById("input").value;
        var currentInput = document.getElementById("in");


        currentInput.innerHTML += "<div class=input-line> <a class=headertxt2>" + currentPath + " " + inputVal + "</a> </div>";


        switch (inputVal) {
            case "ip":
                currentInput.innerHTML += "<div class=input-line> <a class=headertxt2> " + ip + "</a> </div>";
                break;

            case "cd homework":
            case "cd homework ":
                currentPath = "C:\\users\\" + ip + "\\homework>";

                currentInput.innerHTML += "<div class=input-line> <a class=headertxt2> " + currentPath + " " + inputVal + " </a> </div > ";
                break;

            case "open":
                if (currentPath == "C:\\users\\" + ip + "\\homework>") {
                    window.open("https://i.imgur.com/ajycsGI.png", '_blank').focus();
                    break;
                }
            case "cd ..\\":
            case "cd ../":
                currentPath = "C:\\users\\" + ip + ">"
                break;

            case "scan":

                currentInput.innerHTML += "<div class=input-line> <a class=headertxt2 id=scannn>scanning</a> </div>";
                var testtt = 1;
                var originalText = $("#scannn").text(),
                    i = 0;
                var timerId = setInterval(function() {

                    $("#scannn").append(".");
                    i++;

                    if (i == 4) {
                        $("#scannn").html(originalText);
                        i = 0;


                    }


                }, 500);

                var arrayLength = scanString.length;




                for (var i = 0; i < arrayLength; i++) {
                    console.log(scanString[i]);
                    //Do something
                    currentInput.innerHTML += "<div class=input-line> <a class=headertxt2 id=scannn>" + scanString[i] + "</a> </div>";
                };


                clearInterval(timerId);
                break;
            case "cd hacks":
            case "cd hacks ":
                currentPath = "C:\\users\\" + ip + "\\hacks>";

                currentInput.innerHTML += "<div class=input-line> <a class=headertxt2> " + currentPath + " " + inputVal + " </a> </div > ";
                break;
















            default:

                currentInput.innerHTML += "<div class=input-line> <a class=headertxt2> '" + inputVal + "' is not recognized as an internal or external command,  operable program.</a> </div>";
                break;
        }

        path.textContent = currentPath;
        document.getElementById("input").value = '';
        elem.scrollTop = elem.scrollHeight;

    }
};

//password input 


var passInput = document.getElementById("passwordInput").onkeydown = function time(e) {
    if (e.keyCode == 13) {

        var passwrd = document.getElementById("passwordInput").value;

        passwrd.value = '';
    }
}


//folder explorer

const card = document.getElementById('homeworkFolder');
const backHack = document.getElementById('backHacks');
const Password = document.getElementById('sec');

card.addEventListener('dblclick', function(e) {


    var y = document.getElementById("inHomework");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }

    var x = document.getElementById("mainFolder");
    x.style.display = "none";



});

backHack.addEventListener('dblclick', function(e) {


    var y = document.getElementById("inHomework");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }

    var x = document.getElementById("mainFolder");
    x.style.display = "block";



});

Password.addEventListener('dblclick', function(e) {



    var y = document.getElementById("pass");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }


});