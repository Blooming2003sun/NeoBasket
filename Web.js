let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

console.log(card);
let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".main");

function homes(){
    mainPage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";
    blog.style.display="block";
   about.style.display="none";
   contact.style.display="none";


    
document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="rgb(2, 173, 173)";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black";


}
function newsLetter(){
    
    alert("Subscribed to our Newsletter");
    

}

function shops(){
mainPage.style.display="none";
blog.style.display="none";
about.style.display="none"
card.style.display="block";
card2.style.display="block";
contact.style.display="none";

 
document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="rgb(2, 173, 173)";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black";


}

function blogs(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="block";
   about.style.display="none";
   contact.style.display="none";
    

document.getElementById("blog").style.color="rgb(2, 173, 173)";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black";

 



}

function abouts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   about.style.display="block";
   contact.style.display="none";

document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="rgb(2, 173, 173)"

}

function contacts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   about.style.display="none";
   contact.style.display="block";

document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black"
document.getElementById("contact").style.color="rgb(2, 173, 173)"

}

// cart

function show(img){
    let newImg = document.getElementById("newImg");
    console.log(img);
    newImg.src=img.src;

    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   about.style.display="none";
   contact.style.display="none"
    document.querySelector(".cart").style.display="flex"
}


function addCart(){
    
    alert("Added To Cart");
    location.reload()
}
//new
const cartButton = document.getElementById("cartButton");
    const cartModal = document.getElementById("cartModal");
    const cartItemsContainer = document.getElementById("cartitems");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");
    const closeCartButton = document.getElementById("closeCart");

    // Function to update the cart UI
    function updateCartUI() {
        // Clear the cart display
        cartItemsContainer.innerHTML = "";
        let total = 0;

        // Display each item in the cart
        cart.forEach((item) => {
            total += item.price * item.quantity;

            const cartItem = document.createElement("div");
            cartItem.innerHTML = `
                <p>${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}</p>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        // Update the total price and item count
        cartTotal.textContent = total.toFixed(2);
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

        // Save the updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // Add to Cart Button Event
    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", () => {
            const id = button.getAttribute("data-id");
            const name = button.getAttribute("data-name");
            const price = parseFloat(button.getAttribute("data-price"));

            // Check if the item already exists in the cart
            const existingItem = cart.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }

            // Update the cart UI
            updateCartUI();
        });
    });

    // Open Cart Modal
    function showCart(){
        cartModal.classList.remove("hidden");
    }

    // Close Cart Modal
    closeCartButton.addEventListener("click", () => {
        cartModal.classList.add("hidden");
    });

    // Checkout (Clear the cart)
    document.getElementById("checkout").addEventListener("click", () => {
        alert("Checkout complete!");
        cart.length = 0; // Clear the cart
        localStorage.removeItem("cart"); // Clear cart from localStorage
        updateCartUI();
        cartModal.classList.add("hidden");
    });

    // Initialize the cart UI on page load
    updateCartUI(); // Load cart data from localStorage and display it