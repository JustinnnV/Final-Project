document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll("button");
  const cartCount = document.getElementById("cart-count");

  let cartTotal = parseInt(localStorage.getItem("cartTotal")) || 0;
  updateCartUI();

  addToCartButtons.forEach((button) => {
    if (button.textContent.trim() === "Add to Cart") {
      button.addEventListener("click", function () {
        const productName = this.parentElement.querySelector("h5").textContent;
        cartTotal++;
        localStorage.setItem("cartTotal", cartTotal);
        updateCartUI();
        alert(`"${productName}" has been added to your cart!`);
      });
    }
  });

  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your message has been sent! Thank you.");
    this.reset();
  });

  function updateCartUI() {
    cartCount.textContent = cartTotal;
  }
});
