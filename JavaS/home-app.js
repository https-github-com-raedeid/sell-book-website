'use strict'

/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  ////////////////
// Sticky Header
function Book (topic,date_write,age){
    this.topic = topic;
    this.date_write = date_write;
    this.age = age ;
    book_storage.all.push(this)

}
for (var z;z<array_of_books.length;z++){
    Book(array_of_books[z]);
}

var myFunction = function(event){
    var request = [] ;
    if (event.targrt.value == 'action'){


    }
    if (event.targrt.value == "true_story"){

    }

    if(event.targrt.value == "novels"){

    }
    if(event.targrt.value == "ideas"){

    }
    if(event.targrt.value == "90"){

    }
    if(event.targrt.value == "20"){

    }
    if(event.targrt.value == "10"){

    }

    if(event.targrt.value == "6"){

    }
    if(event.targrt.value == "12"){

    }
    if(event.targrt.value == "19"){
        
    }

}
var pick = document.getElementById('submit')
pick.addEventListener('submit',myFunction() )