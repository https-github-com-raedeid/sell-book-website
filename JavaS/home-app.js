// 'use strict'

/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
var allBooks = [['Murder in Cherry Hills', 'mystery', '6-12', '2011-until now'],
            ['Infinity', 'mystery', '13-18', '1990-2000'],
            ['No Shelter', 'mystery', '19 or More', '2000-2010'],
            ['Sindi and the Moon', 'true_story', '6-12', '2000-2010'],
            ['The Girl with No Name', 'true_story', '13-18', '1990-2000'],
            ['When Johnny Comes Marching', 'true_story', '19 or More', '2011-until now'],
            ['The Brain: The Story of You', 'science', '13-18', '2011-until now'],
            ['Audrey the Amazing Inventor', 'science', '6-12', '1990-2000'],
            ['science encyclopedia', 'science', '19 or More', '2000-2010'],
            ['Public Speaking Super Powers', 'ideas', '6-12', '1990-2000'],
            ['Cofounding the Right Way', 'ideas', '13-18', '2000-2010'],
            ['Social Intelligence', 'ideas', '19 or More', '2011-until now']];

////////////////
// Sticky Header
function Book(Name, Topic, Age, Date_write) {
  this.Name = Name;
  this.Topic = Topic;
  this.Age = Age;
  this.Date_write = Date_write;
  Book.all.push(this);
  
}
Book.all = [];
for (var z = 0; z < allBooks.length; z++) {
 new Book(allBooks[z][0],allBooks[z][1],allBooks[z][2],allBooks[z][3]);
}

var request = [];
var myFunction = function (event) {
  request = []
  if (event.target.option.id == 'mystery') {
    request.push('mystery')

  }else if (event.target.option.id == "true_story") {
    request.push('true_story')
  }else if (event.target.option.id == "science") {
    request.push('novels');
  }else if (event.target.option.id == "ideas") {
    request.push('ideas');
  }
  if (event.target.option.id == "1990-2000") {
    request.push('1990-2000');
  }
  if (event.target.option.id == "2000-2010") {
    request.push('2000-2010');
  }
  if (event.target.option.id == "2011-until now") {
    request.push('2011-until now')
  }

  if (event.target.option.id == "6-12") {
    request.push('6-12');

  }
  if (event.target.option.id == "13-18") {
    request.push('13-18');

  }
  if (event.target.option.id == "19 or More") {
    request.push('19 or More');

  }

}
var pick = document.getElementById('submit');
pick.addEventListener('submit', myFunction);
console.log(pick);
// console.log(request);
// var local_storage_book = JSON.stringify(localStorage.setItem('request_customer',request))
var books_request = []
for (var i=0;i<request.length;i++){
  for (var l=0;l<Book.all.length;l++){
    if (request[i] === Book.all[l].Topic){

      
    }
}
}
