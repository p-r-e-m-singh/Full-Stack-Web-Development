var options = document.getElementsByTagName('button');
var para = document.getElementById("paragraph");
function changetored() {
    para.style.backgroundColor = "red";
}

function changetoblue() {
    para.style.backgroundColor = "blue";
}

function changetogreen() {
    para.style.backgroundColor = "green";
}

function changeto10() {
    para.style.fontSize= "10px";
}
function changeto20() {
    para.style.fontSize= "20px";
}
function changeto30() {
    para.style.fontSize= "30px";
}

function changetoitalic() {
    para.style.font="italic";
}

function changetogeorgia() {
    para.style.font= "georgia";
}

function changetoariel() {
    para.style.font= "ariel";
}

options[0].addEventListener("click", changetored);
options[1].addEventListener("click", changetoblue);
options[2].addEventListener("click", changetogreen);
options[3].addEventListener("click", changeto10);
options[4].addEventListener("click", changeto20);
options[5].addEventListener("click", changeto30);
options[6].addEventListener("click", changetoitalic);
options[7].addEventListener("click", changetoariel);
options[8].addEventListener("click", changetogeorgia);
