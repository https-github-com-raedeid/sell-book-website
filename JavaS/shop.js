var feed_back = JSON.parse(localStorage.getItem('request_customer'));
console.log(feed_back);
var body = document.getElementById('body');
// var add_cart = localStorage.setItem('cart', '')
var collection_of_cart = []
var create_div = document.createElement('div')
function render(obj) {
    var elemnt = obj
    create_div = document.createElement('div')
    create_div.setAttribute('class', "book-section");
    body.appendChild(create_div);
    var create_image = document.createElement('img');
    create_image.setAttribute('src', obj.Image_path);
    create_image.setAttribute('class', 'rss');
    create_div.appendChild(create_image);
    var create_another_div = document.createElement('div');
    create_another_div.textContent = obj.Price;
    create_another_div.setAttribute('class', 'price');
    create_div.appendChild(create_another_div);
    create_button = document.createElement('button');
    create_button.setAttribute('type', 'submit');
    create_button.setAttribute('class', 'take');
    create_button.textContent = 'add to cart'
    create_div.appendChild(create_button);
    create_div.setAttribute('class', 'feed');
    // var invoke = increase(obj)
    create_button.setAttribute('onclick', 'increase()')
    // var button_increase = document.getElementsByClassName('take'); 
    // console.log(collection_of_cart)
    // var listen_to = document.getElementById('take');
    // console.log(listen_to);
    // listen_to.addEventListener('submit',function(event){
    //     alert('hi');
    //     console.log(add_cart)


}

// var MyFunction = function(event){
//    obj.Quantity =obj.Quantity + 1 
//     var create_element = document.createElement('div')
//     create_div.appendChild(create_element);
//     var create_add = document.createElement('button');
//     var create_minuos = document.createElement('button');
//     create_add.setAttribute('type','submit');
//     create_add.setAttribute('onclick','increase()');
//     create_minuos.setAttribute('type','submit');
//     create_minuos.setAttribute('onclick','decrease()');
//     create_add.textContent = "+"
//     create_minuos.textContent = "-"
//     var create_number = document.createElement('div');
//     create_number.setAttribute('id','number')
//     create_number.textContent =obj.Quantity
//     create_element.appendChild(create_add);
//     create_add.setAttribute('class','add');
//     create_element.appendChild(create_minuos);
//     create_add.setAttribute('class','minuos');
//     create_element.appendChild(create_number);
//     localStorage.setItem('cart',JSON.stringify(feed_back))


// }
// var update = document.getElementById('number')
// var bottom_div = document.createElement('div')
// update.textContent =obj.Quantity 
// body.appendChild(bottom_div)
// bottom_div.textContent = `The total cost of books ${feed_back[0].Quantity} * ${feed_back[0].Price} = ${feed_back[0].Quantity * parseInt(feed_back[0].Price)} Jd`
var increase = function () {
    if (JSON.parse(localStorage.getItem('cart')) === null) {
        obj.Quantity++
        collection_of_cart.push(obj);
        localStorage.setItem('cart', JSON.stringify(collection_of_cart))

    } else {
        if (collection_of_cart.find(cartAdded => cartAdded.Name === obj.Name)){
        var updateOld = JSON.parse(localStorage.getItem('cart'))
        updateOld.obj.Quantity++
        localStorage.setItem('cart', JSON.stringify(updateOld))
        }else{
            var update = JSON.parse(localStorage.getItem('cart'))
            obj.Quantity++
            update.push(obj)
            localStorage.setItem('cart',JSON.stringify(update));

        }
    }

}
var decrease = function (obj) {
    if (obj.Quantity > 0) {
        var update = document.getElementById('number')
        obj.Quantity--
        update.textContent = obj.Quantity
        localStorage.setItem('cart', JSON.stringify(obj))

    }

}
var go = function () {
    window.location.href = '/result.html'
}
for (var i = 0; i < feed_back.length; i++) {
    render(feed_back[i]);
    // increase(feed_back[i]);
    

}

var create_finish = document.createElement('button')
create_finish.setAttribute('type', 'submit');
create_finish.setAttribute('onclick', 'go()')
create_finish.setAttribute('class', 'cartb')
body.appendChild(create_finish);
create_finish.textContent = 'Cart'
