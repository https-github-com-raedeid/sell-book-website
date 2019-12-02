'use strict'
var submits=document.getElementById("submits");
submits.addEventListener('click',function(event){
    event.preventDefault();
    var input1 = document.getElementById("names").value;
    console.log('the input is ',typeof input1);
    localStorage.setItem("name", JSON.stringify(input1));
    window.location.href="/thanks.html";
});
//console.log(localStorage.setItem("name", JSON.stringify(input1)));

// var saveName =localStorage.setItem("name");
// if (saveName) {
// // console.log(JSON.parse(listString));
//    var input1= JSON.string(saveName);
// }
