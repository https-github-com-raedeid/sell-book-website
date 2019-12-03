var feed_back = JSON.parse(localStorage.getItem('request_customer'));
console.log(feed_back);
var body = document.getElementById('body');
var add_cart = localStorage.setItem('cart',[])
var collection_of_cart = []
function render(){
    for (var w=0;w<feed_back.length;w++){
        var create_div = document.createElement('div')
        create_div.setAttribute('class',"book-section");
        body.appendChild(create_div);
        var create_image = document.createElement('img')
        create_image.setAttribute('src',feed_back[w].Image_path);
        create_div.appendChild(create_image);
        var create_span = document.createElement('span');
        create_span.textContent = feed_back[w].Price ;
        create_div.appendChild(create_span);
        create_button = document.createElement('button')
        create_button.setAttribute('type','submit');
        create_button.setAttribute('class','take');
        create_button.textContent = 'add to cart'
        create_div.appendChild(create_button);
        create_button.setAttribute('onclick','MyFunction()')
        console.log(collection_of_cart)
        // var listen_to = document.getElementById('take');
        // console.log(listen_to);
        // listen_to.addEventListener('submit',function(event){
        //     alert('hi');
        //     console.log(add_cart)
    
    }
}
render();

var MyFunction = function(event){
    feed_back[0].Quantity = feed_back[0].Quantity + 1 
    var create_element = document.createElement('div')
    body.appendChild(create_element);
    var create_add = document.createElement('button');
    var create_minuos = document.createElement('button');
    create_add.setAttribute('type','submit');
    create_add.setAttribute('onclick','increase()');
    create_minuos.setAttribute('type','submit');
    create_minuos.setAttribute('onclick','decrease()');
    create_add.textContent = "+"
    create_minuos.textContent = "-"
    var create_number = document.createElement('div');
    create_number.setAttribute('id','number')
    create_number.textContent = feed_back[0].Quantity
    create_element.appendChild(create_add);
    create_element.appendChild(create_minuos);
    create_element.appendChild(create_number);
    localStorage.setItem('cart',JSON.stringify(feed_back))

             
}
var increase = function (){
    feed_back[0].Quantity ++
    var update = document.getElementById('number')
    update.textContent = feed_back[0].Quantity 
    localStorage.setItem('cart',JSON.stringify(feed_back))
}
var decrease = function(){
    if (feed_back[0].Quantity > 0){
        var update = document.getElementById('number')
        feed_back[0].Quantity --
        update.textContent = feed_back[0].Quantity
        localStorage.setItem('cart',JSON.stringify(feed_back))

    }

}