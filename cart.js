function goToCheckout() {
  window.location.href = "checkout.html";
}

document.getElementById("debit-card").addEventListener("click", goToCheckout);
document.getElementById("credit-card").addEventListener("click", goToCheckout);
document.getElementById("upi").addEventListener("click", goToCheckout);
document.getElementById("net-banking").addEventListener("click", goToCheckout);

function updateTotal() {
  try {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let totalPrice = 0;

    cartItems.forEach((item) => {
      totalPrice += item.mrp;
    });

    const shippingCost = 100;
    const totalAmount = totalPrice + shippingCost;

    document.getElementById("total-price").innerText = totalAmount;
    document.getElementById(
      "price"
    ).innerText = `Total Product Price: RS ${totalPrice}`;
  } catch (error) {
    console.error("Error reading cart data:", error);
  }
}

function displayCartItems() {
  try {
    const cartItemsList = document.getElementById("cart-items-list");
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    cartItemsList.innerHTML = "";

    if (cartItems.length === 0) {
      cartItemsList.innerHTML = "<p>Your cart is empty.</p>";
      updateTotal();
      return;
    }

    cartItems.forEach((item, index) => {
      const cartItemDiv = document.createElement("div");
      cartItemDiv.classList.add("cart-item");
      cartItemDiv.innerHTML = `
        <div class="m-image">
          <img src="${item.image}" alt="${item.name}" />
        </div>
        <div class="m-info">
          <div>
            <p>Name: ${item.name}</p>
            <p>Size: ${item.size}</p>
            <p>MRP: RS ${item.mrp}</p>
          </div>
          <button class="delete-button" onclick="deleteFromCart(${index})">Delete</button>
        </div>
      `;
      cartItemsList.appendChild(cartItemDiv);
    });

    updateTotal();
  } catch (error) {
    console.error("Error displaying cart items:", error);
  }
}

function deleteFromCart(index) {
  try {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
  } catch (error) {
    console.error("Error deleting item from cart:", error);
  }
}

displayCartItems();
