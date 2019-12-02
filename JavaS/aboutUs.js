'use strict'
// var form=document.getElementById("form").submit();
var input1= document.getElementById("A").value;

localStorage.setItem("name", JSON.stringify(input1));
console.log(localStorage.setItem("name", JSON.stringify(input1)));

// var saveName =localStorage.setItem("name");
// if (saveName) {
// // console.log(JSON.parse(listString));
//    var input1= JSON.string(saveName);
// }