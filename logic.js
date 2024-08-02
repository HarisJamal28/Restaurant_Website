document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
  
    addToCartButtons.forEach(button => {
      button.addEventListener("click", () => {
        const itemId = button.getAttribute("data-item-id");
        const itemName = button.getAttribute("data-item-name");
        const itemPrice = parseFloat(button.getAttribute("data-item-price"));
        addToCart(itemId, itemName, itemPrice);
      });
    });
  });
  
  function addToCart(itemId, itemName, itemPrice) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const existingItem = cart.find(item => item.id === itemId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ id: itemId, name: itemName, price: itemPrice, quantity: 1 });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${itemName} added to cart`);
  }
  