// var feed_back = JSON.parse(localStorage.getItem('cart'));
// console.log(feed_back);
var body = document.getElementById('body')
var new_table = document.createElement('table');
var detail = []
var sumation = 0
body.appendChild(new_table);
for (var w = 0; w < feed_back.length; w++) {
    var new_tr = document.createElement('tr');
    new_table.appendChild(new_tr);
    for (var x=0;x<3;x++){
       var new_th =  document.createElement('th');
       new_tr.appendChild('th')
       if (x === 0){
           var new_img = document.createElement('img');
           new_img.setAttribute('href',`${feed_back[w].Image_path}`)
           new_th.appendChild(new_img);
       }else if(x === 1){
           new_th.textContent =`${feed_back[w].Name}` 
       }else{
           var total = feed_back[w].Quantity * parseInt(feed_back[w].Price.slice(0, 1))
           new_th.textContent = `${total} Jd` 
           sumation = sumation + total
       }
    }
} 
var new_div = document.createElement('div')
body.appendChild(new_div)
new_div.textContent = sumation
var go = function () {
    window.location.href = 'aboutUs.html'
}