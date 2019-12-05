var feed_back = JSON.parse(localStorage.getItem('request_customer'));
console.log(feed_back);
var body = document.getElementById('body');
// var add_cart = localStorage.setItem('cart', '')
var collection_of_cart = []
var create_div = document.createElement('div')
function render() {
    create_div = document.createElement('div')
    create_div.setAttribute('class', "book-section");
    body.appendChild(create_div);
    var create_image = document.createElement('img');
    create_image.setAttribute('src', feed_back[0].Image_path);
    create_image.setAttribute('class', 'rss');
    create_div.appendChild(create_image);
    var create_another_div = document.createElement('div');
    create_another_div.textContent = feed_back[0].Price;
    create_another_div.setAttribute('class', 'price')
    create_div.appendChild(create_another_div);
    create_button = document.createElement('button');
    create_button.setAttribute('type', 'submit');
    create_button.setAttribute('class', 'take');
    create_button.textContent = 'add to cart'
    create_div.appendChild(create_button);
    create_div.setAttribute('class', 'feed');
    create_button.setAttribute('onclick', 'increase()')
    console.log(collection_of_cart)
    // var listen_to = document.getElementById('take');
    // console.log(listen_to);
    // listen_to.addEventListener('submit',function(event){
    //     alert('hi');
    //     console.log(add_cart)


}
render();

var increase = function () {
    if (JSON.parse(localStorage.getItem('cart')) == null) {
        feed_back[0].Quantity++
        localStorage.setItem('cart', JSON.stringify(feed_back[0]))
        
    } else {
        var update = JSON.parse(localStorage.getItem('cart'))
        update.Quantity++
        localStorage.setItem('cart',JSON.stringify(update))
    }

}
var decrease = function () {
    if (feed_back[0].Quantity > 0) {
        var update = document.getElementById('number')
        feed_back[0].Quantity--
        update.textContent = feed_back[0].Quantity
        localStorage.setItem('cart', JSON.stringify(feed_back[0]))

    }

}
var go = function () {
    window.location.href = '/result.html'
}
var create_finish = document.createElement('button')
create_finish.setAttribute('type', 'submit');
create_finish.setAttribute('onclick', 'go()')
create_finish.setAttribute('class','cartb')
body.appendChild(create_finish);
create_finish.textContent = 'Cart'