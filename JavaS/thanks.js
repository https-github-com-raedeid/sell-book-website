console.log(JSON.parse(localStorage.getItem("name")))
var nameCustomer= JSON.parse(localStorage.getItem("name"));
// console.log(nameCustomer);
var createP= document.createElement('p');
createP.setAttribute("class","text");
var bodyEl= document.getElementById('bodyEl');
bodyEl.appendChild(createP);
createP.textContent = `Thanks    ${nameCustomer}   to visit our web sit , you will get your order soon`;