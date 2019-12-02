// var feed_back = JSON.parse(localStorage.getItem('request_customer'));
var feed_back = [{Name: "Murder in Cherry Hills", Topic: "mystery", Age: "6-12", Date_write: "2011-until now",Image_path:'img/Lead-nurturing-optimieren-header.png',Price:'5Jd'},
                {Name: "Infinity", Topic: "mystery", Age: "13-18", Date_write: "1990-2000",Image_path:'img/Naysayers.jpg',Price:'10jd'}]
var body = document.getElementById('body');
var add_cart = localStorage.setItem('cart',[])
var collection_of_cart = []
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
localStorage.setItem('cart',JSON.stringify([]));
var MyFunctionToAdd = function(event){
        JSON.parse(localStorage.getItem('cart')).push(feed_back[w])
        
}
var MyFunctionToDelete = function(){
    
}
