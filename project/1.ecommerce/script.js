// ShopLite - Simple Demo

const cartButtons = document.querySelectorAll(".add-cart");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const total = document.getElementById("total");
const search = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

let cart = [];
let totalPrice = 0;

// Load cart from Local Storage
if(localStorage.getItem("cart")){
    cart = JSON.parse(localStorage.getItem("cart"));
    updateCart();
}

// Add to Cart
cartButtons.forEach(button=>{
    button.addEventListener("click",()=>{

        const card = button.parentElement;

        const name = card.querySelector("h3").innerText;
        const price = Number(card.querySelector("p").innerText.replace("$",""));

        cart.push({name,price});

        localStorage.setItem("cart",JSON.stringify(cart));

        updateCart();

        button.innerText="Added ✓";

        setTimeout(()=>{
            button.innerText="Add to Cart";
        },1000);

    });
});

// Update Cart
function updateCart(){

    cartCount.innerText = cart.length;

    totalPrice = 0;

    if(cart.length===0){

        cartItems.innerHTML="No Items Yet";
        total.innerText="$0";
        return;
    }

    cartItems.innerHTML="";

    cart.forEach(item=>{

        totalPrice += item.price;

        cartItems.innerHTML += `
            <p>${item.name} - $${item.price}</p>
        `;

    });

    total.innerText="$"+totalPrice;

}

// Live Search
search.addEventListener("keyup",()=>{

    const value = search.value.toLowerCase();

    cards.forEach(card=>{

        const title = card.querySelector("h3").innerText.toLowerCase();

        if(title.includes(value)){
            card.style.display="block";
        }else{
            card.style.display="none";
        }

    });

});

// Checkout
document.querySelector(".checkout").addEventListener("click",()=>{

    if(cart.length===0){
        alert("Your cart is empty!");
        return;
    }

    alert("Thank you for your purchase!");

    cart=[];

    localStorage.removeItem("cart");

    updateCart();

});





// Category Filter

const filterButtons = document.querySelectorAll(".category button");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Active Button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {

            if (filter === "all" || card.dataset.category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});