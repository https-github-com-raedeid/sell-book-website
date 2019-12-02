var nameCustomer= JSON.parse(localStorage.getItem(input1));
var createP= document.createElement('p');
var bodyEl= document.getElementById('bodyEl');
bodyEl.appendChild(createP);
createP.textContent = ('Thanks'+ `${input1}` + 'to visit our web site ');