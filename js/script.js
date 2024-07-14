const btnCart = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const btnClose = document.querySelector("#cart-close");

btnCart.addEventListener("click", () => {
  cart.classList.add("cart-active");
});

btnClose.addEventListener("click", () => {
  cart.classList.remove("cart-active");
});

document.addEventListener("DOMContentLoaded", LoadFood);

function LoadFood() {
  loadContent();
}
function loadContent() {
  //Remove Food Items  From Cart
  let btnRemove = document.querySelectorAll(".cart-remove");
  btnRemove.forEach((btn) => {
    btn.addEventListener("click", removeItem);
  });

  //Product Item Change
  let qtyElements = document.querySelectorAll(".cart-quantity");
  qtyElements.forEach((input) => {
    input.addEventListener("change", changeQty);
  });
}

//Remove Item
function removeItem() {
  if (confirm("Are you sure to remove")) {
    this.parentElement.remove();
  }
}

//Change Quantity
function changeQty() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  loadContent();
}
