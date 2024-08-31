document.querySelector("item.price")

function check(){
    if(localStorage.getItem("username")){
        window.location= "cartsproducts.html"
    }else {
        window.location="index.html"
    }
}
let cartProductDiv = document.querySelector(".carts_products div" )
function addToPrice(price){
let choosenItem = products_item_desc.find((item) => item.price == price);
cartProductDiv.innerHTML = `<p>${choosenItem.price}</p>`
}