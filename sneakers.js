let cart = JSON.parse(localStorage.getItem("cart")) || [];

function handleSizeSelection(event) {
  document.querySelectorAll(".size-btn").forEach((button) => {
    button.classList.remove("selected");
  });
  event.target.classList.add("selected");
}

function addToCart(productName, productImage, size, mrpText) {
  const mrp = parseInt(mrpText.replace(/[^0-9]/g, ""), 10);

  if (isNaN(mrp)) {
    alert("Invalid MRP value. Please check product details.");
    return;
  }

  const product = {
    name: productName,
    image: productImage,
    size: size,
    mrp: mrp,
  };

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${productName} (Size: ${size}) has been added to the cart!`);
}

document.querySelectorAll(".size-btn").forEach((button) => {
  button.addEventListener("click", handleSizeSelection);
});

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    const productItem = this.closest(".product-item");
    const productName = productItem.querySelector(".product-name").textContent;
    const productImage = productItem.querySelector(".product-image").src;
    const sizeElement = productItem.querySelector(".size-btn.selected");

    if (!sizeElement) {
      alert("Please select a size!");
      return;
    }

    const size = sizeElement.textContent;
    const mrpText = productItem.querySelector(".mrp").textContent;

    addToCart(productName, productImage, size, mrpText);
  });
});
