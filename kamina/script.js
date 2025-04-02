//nav-menu visibility 
const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");
const navMenu = document.querySelector(".nav-menu");

menuOpenButton.addEventListener("click", () => {
    navMenu.classList.add("active");
});
menuCloseButton.addEventListener("click", () => {
    navMenu.classList.remove("active");
});
document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && !menuOpenButton.contains(event.target)) {
        navMenu.classList.remove("active");
    }
});
//cart
function cart() {
    let img = document.querySelector('.fa-solid fa-cart-shopping');
    let amount = document.querySelector('.cart-amount');
    let plus_item=+1;
    }
    
    let cart_items_count = document.querySelector('.cart-amount')
    let add_to_cart_buttons = document.querySelectorAll('.add-to-cart-btn')
    for (let i=0; i<add_to_cart_buttons.length;i+=1){
        add_to_cart_buttons[i].addEventListener('click',function(){
            cart_items_count.innerHTML= +cart_items_count.innerHTML+1
        })
    }


//buy now btn 
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".buy-now");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            window.location.href = "lodin.html"; 
        });
    });
});

//login btn alert
let loginBtn = document.querySelector('.login-btn');
loginBtn.addEventListener('click', function(){
    alert('This feature is currently not available')
});
