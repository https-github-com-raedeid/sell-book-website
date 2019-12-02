'use strict'

/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}





var allBooks = [['Murder in Cherry Hills', 'mystery', '6-12', '2011-until now','pro_pbid_3893388.jpg','10jd'],
['Infinity', 'mystery', '13-18', '1990-2000','pro_pbid_4322159.jpg'],
['No Shelter', 'mystery', '19 or More', '2001-2010','pro_pbid_11887.jpg'],
['Sindi and the Moon', 'true_story', '6-12', '2001-2010','01.jpg'],
['The Girl with No Name', 'true_story', '13-18', '1990-2000','pro_pbid_16660.jpg'],
['When Johnny Comes Marching', 'true_story', '19 or More', '2011-until now','1318432602.jpg'],
['The Brain: The Story of You', 'science', '13-18', '2011-until now','51MBUjc9t-L._SX322_BO1,204,203,200_.jpg'],
['Audrey the Amazing Inventor', 'science', '6-12', '1990-2000','BYKCW.jpg'],
['science encyclopedia', 'science', '19 or More', '2001-2010','51ethkIpKWL._SX381_BO1,204,203,200_.jpg'],
['Public Speaking Super Powers', 'ideas', '6-12', '1990-2000','pro_pbid_4212722.jpg'],
['Cofounding the Right Way', 'ideas', '13-18', '2001-2010','pro_pbid_4077055.jpg'],
['Social Intelligence', 'ideas', '19 or More', '2011-until now','pro_pbid_4449297.jpg']];


function Book(Name, Topic, Age, Date_write) {
  this.Name = Name;
  this.Topic = Topic;
  this.Age = Age;
  this.Date_write = Date_write;
  Book.all.push(this);

}
Book.all = [];
for (var z = 0; z < allBooks.length; z++) {
  new Book(allBooks[z][0], allBooks[z][1], allBooks[z][2], allBooks[z][3]);
}

// var request = [];

var pick = document.getElementById('form');
var topic = document.getElementById("chooseTopic");
console.log(Book.all)
var date = document.getElementById('chooseDate');
var age = document.getElementById('targetAge');
pick.addEventListener('submit', function (event) {
  event.preventDefault();
  var request = [];
  // alert('hi')

  if (topic.value === 'mystery') {
    console.log("hi")
    request.push('mystery')
  } else if (topic.value === "true_story") {
    request.push('true_story')
  } else if (topic.value === "sience") {
    request.push('sience');
  } else if (topic.value === "ideas") {
    request.push('ideas');
  }
  // console.log(request)
  if (age.value === "6-12") {
    request.push('6-12');

  } else if (age.value === "13-18") {
    request.push('13-18');

  } else if (age.value === "19 or More") {
    request.push('19 or More');
  }

  if (date.value === "1990-2000") {
    request.push('1990-2000');
  } else if (date.value === "2001-2010") {
    request.push('2001-2010');
  } else if (date.value === "2011-until now") {
    request.push('2011-until now')
  }
  // console.log(request);
  // console.log(Book.all);
  // console.log(pick);
  var books_request = []
  function isEqual(obj) {
    console.log(request);
    if (request[0] === obj.Topic) {
      if (request[1] === obj.Age) {
        if (request[2] === obj.Date_write) {
          return true
        }
      }
    }
    return false
  }
  for (var i=0;i<Book.all.length;i++){
    if (isEqual(Book.all[i])){
      books_request.push(Book.all[i]);
    }
  }
  console.log(books_request);
  var local_storage_book = localStorage.setItem('request_customer',JSON.stringify(books_request));
  window.location.href = "/shop.html"

});



