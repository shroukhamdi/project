
function search(){
    let searcBar = document.querySelector(".search-input").value.toUpperCase;
    let products = document.querySelector(".products");
    let products_item = document.querySelectorAll(".products_item");
    let prroductName = document.getElementsByTagName("h2");

    for(let i = 0; i<prroductName.length; i++) {
        if(prroductName[i].innerHTML.toUpperCase().indexOf(searcBar) >=0){
            products[i].style.display = "";

        }else{
            products[i].style.display = "none";
        }
    }
    

}







// function search() {
// let filter = document.getElementById("find").ariaValueMax.toUpperCase();
// let item = document.querySelectorAll("products");
// let l = document.getElementsByTagName("h2");
// for(var i = 0; i<= l.length;i++){
//     let a=item[i].getElementsByTagName("h2")[0];

//     let value = a.innerHTML || a.innerText || a.textContent;

//     if(value.toUpperCase(). indexOf(filter) > -1){
//         item[i].style.display ="";
// }else
// {
//     item[i].style.display ="none";
// }

// }
// }const product
// let filterarray=[];

//  let galleryarray= [
//     let allProducts = document.querySelector(".products")
// let products =[
//     {
//         id:1,
//             image:"images/t-shirt.jpg", 
//             title: "T-shirt adidas",
//             price: "80$",
//             Category: "fashion",
        
//         },
        
//     {
//         id:2,
//             image:"images/arepods.jpg", 
//             title: "earpods",
//             price: "150$",
//             Category: "Phone accessories",
//     },

//     {

//         id:3,
//             image:"images/jacket.jpg", 
//             title: "Jacket",
//             price: "120$",
//             Category: "fashion",
//     },

//     {

//         id:4,
//             image:"images/addidas bottle.jpg", 
//             title: "Adidas bottle",
//             price: "50$",
//             Category: "Sport",

//     },

//     {
//         id:5,
//             image:"images/glasses.jpg", 
//             title: "Glasses ",
//             price: "80$",
//             Category: "Men accessories",

//     },

//     {
//         id:6,
//             image:"images/cap.jpg", 
//             title: "Cap",
//             price: "20$",
//             Category: "Men accessories",

//     },

//     {
//         id:7,
//             image:"images/bag addidas.jpg", 
//             title: "Bag adidas ",
//             price: "110$",
//             Category: "Bags",

//     },

//     {
//         id:8,
//             image:"images/chose.jpg", 
//             title: "Shoes adidas",
//             price: "80$",
//             Category: "sport",
//     },

//     {
//         id:9,
//             image:"images/bag.jpg", 
//             title: "Bag",
//             price: "100$",
//             Category: "fashion",
//     },

// ]

// function drawItems (){
//     let y = products.map((item) =>{
//         return `
//         <div class="products_item">
//                 <img class="products_item_img" src="${item.image}" alt="">
//                 <div class="products_item_desc">
//                     <h2>${item.title}</h2>
//                     <p>${item.price}</p>
//                     <span>${item.Category}</span>
//                 </div>
//                 <div class="products_item_action">
//                     <button class="add_to_cart" onClick="addToCart(${item.id})">Add To Cart</button>
//                     <i class="far fa-heart fav"></i>

//                 </div>
//             </div>
//         `        

//     } )
       
//     allProducts.innerHTML = y;
    
    
// }


//  ] 
//  showgallerry(galleryarray);
//  function showgallerry(currarray) {
//     for(var i=0;i<currarray.lenght;i++){
//         document.getElementById("card").innerHTML += `
//         <div class="col-md-4 mt-3">
//         <div class="card p-3 ps-5 pe-5">
//         <img src="${currarray[i].src}" width="100%" height="320px"/>
//         <h4 class="text-capitalize text-center">${currarray[i].title}</h4>
//         <p class="mt-2">${currarray[i].price}</p>
//         <span>${currarray[i].Category}</span>
//         <div class="btn">
//                     <button class="add_to_cart" onClick="addToCart(${currarray[i].id})">Add To Cart</button>
//                     <i class="far fa-heart fav"></i>

//                 </div>
        

//         </div>
//         </div>
//         `
        
//     }
//  }      
        

// const Categories = [...new Set(product.map((item)=>
//     {return item}))]

//     let cart = document.getElementById("root")
//     cart.innerHTML = Categories.map((item)=
//     {
//         var {image, title, price, Category} = item;
        
           
            
            
            
        
//     })




