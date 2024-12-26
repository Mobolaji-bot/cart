import {data} from "./data.js"

const desertCont = document.getElementById("desert-container");

const emptyCart  = document.getElementById("emptyCart");
console.log(emptyCart)
// console.log(cartContainer);
console.log(desertCont);


console.log(data)

let cart = []

document.addEventListener("DOMContentLoaded", () => {
  desertCont.innerHTML = data
    .map((desert, index) => {
      return `<div class="flex flex-col items-start">
          <div class="relative w-full">
            <img
              class="rounded-2xl"
              src=${desert.image.mobile}
              alt=${desert.name}
            />
            <button
              id="add-to-cart-button-${index}"
              class="add-to-cart-button absolute bg-white left-0 right-0 mx-auto w-fit rounded-2xl px-5 py-1.5 text-sm font-semibold text-[#3b2520] border border-[#5d2418] bottom-[-14px] z-10"
            >
              Add to Cart
            </button>
          </div>

          <div class="flex flex-col items-start mt-5">
            <p class="text-xs text-[#5d2418]">${desert.category}</p>
            <p class="text-[#2e1813] font-semibold">${desert.name}</p>
            <p class="text-[#b85c06] font-semibold">$${desert.price}</p>
          </div>
        </div>`;
    })
    .join("");
});


  desertCont.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("add-to-cart-button")) {
      if (event.target.innerHTML === "Add to Cart" || cart.length === 0) {
        event.target.innerHTML = "Added to Cart";
        event.target.style.color = "#ffffff";
        event.target.style.backgroundColor = "#5d2418";
        console.log("event id:", event.target.id);
        const index = event.target.id.split("-")[4]
        console.log("index",index);
        console.log(data[index]);
        cart.push(data[index])
        
        console.log(cart);
        // const index = event.target.id.split("-")[4];
        // cart.push(data[index]);
        // console.log(cart)
      } else {
        event.target.innerHTML = "Add to Cart";
        event.target.style.backgroundColor = "#ffffff";
        event.target.style.color = "#3b2520";
      }
    }
  });
  const updateCart = () => {
    const cartContainer = document.getElementById('cartItems');
    cartContainer.innerHTML = cart
    .map((item) => {
      return `<div class=flex flex-col>
      <p>${item.name}</p>
      <p>$${item.price}</p>
      </div>`
    })
    .join("");

    let totalPrice = 0;
    cart.forEach((item) =>{
      totalPrice += item.price;
    });
    const totalPriceElement = document.getElementById("total-price");
    totalPriceElement.innerHTML = `Total Price: $${totalPrice.toFixed(2)}`
  }
