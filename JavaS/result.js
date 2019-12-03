var feed_back = JSON.parse(localStorage.getItem('cart'));
console.log(feed_back);
var body = document.getElementById('body')
// var result = document.createElement('div');
var new_line = document.createElement('p');
var create_p = document.createElement('p');
create_p.setAttribute('class','p');
body.appendChild(new_line);
// result.appendChild(create_p);
body.appendChild(create_p);
new_line.textContent =  `Name : ${feed_back.Name}`
create_p.textContent = `The total cost of books : ${feed_back.Quantity} * ${feed_back.Price} = ${feed_back.Quantity * parseInt(feed_back.Price.slice(0,1))} Jd`