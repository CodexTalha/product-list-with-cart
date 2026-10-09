// Find every product card on the page.
const productCards = document.querySelectorAll('.product-card');
const cartCount = document.querySelector('#cart-count');
const cartStatus = document.querySelector('#cart-status');
const cartItems = document.querySelector('#cart-items');
const cartEmpty = document.querySelector('#cart-empty');
const cartFilled = document.querySelector('#cart-filled');
const cartTotal = document.querySelector('#cart-total');
const cartItemTemplate = document.querySelector('#cart-item-template');
const confirmOrderButton = document.querySelector('#confirm-order');
const orderConfirmation = document.querySelector('#order-confirmation');
const confirmedItems = document.querySelector('#confirmed-items');
const confirmedTotal = document.querySelector('#confirmed-total');
const confirmedItemTemplate = document.querySelector('#confirmed-item-template');
const startNewOrderButton = document.querySelector('#start-new-order');

// Return the shop to its initial empty state.
startNewOrderButton.addEventListener('click', () => {
  orderConfirmation.close();

  productCards.forEach((productCard) => {
    productCard.querySelector('.quantity-control__value').textContent = '0';
    productCard.querySelector('.quantity-control').hidden = true;
    productCard.querySelector('.add-to-cart').hidden = false;
  });

  updateCart();
  confirmedItems.replaceChildren();
  confirmedTotal.textContent = '$0.00';
  productCards[0].querySelector('.add-to-cart').focus();
});

// Build the order summary before opening the confirmation dialog.
confirmOrderButton.addEventListener('click', () => {
  confirmedItems.replaceChildren();
  let orderTotal = 0;

  productCards.forEach((productCard) => {
    const quantity = Number(productCard.querySelector('.quantity-control__value').textContent);
    if (quantity === 0) return;

    const name = productCard.querySelector('.product-card__name').textContent;
    const priceText = productCard.querySelector('.product-card__price').textContent;
    const price = Number(priceText.replace('$', ''));
    const subtotal = price * quantity;
    orderTotal += subtotal;

    const confirmedItem = confirmedItemTemplate.content.cloneNode(true);
    const image = confirmedItem.querySelector('.confirmed-item__image');
    image.src = `./assets/images/image-${productCard.dataset.productId}-thumbnail.jpg`;
    confirmedItem.querySelector('.confirmed-item__name').textContent = name;
    confirmedItem.querySelector('.confirmed-item__quantity').textContent = `${quantity}x`;
    confirmedItem.querySelector('.confirmed-item__unit-price').textContent = `@ $${price.toFixed(2)}`;
    confirmedItem.querySelector('.confirmed-item__subtotal').textContent = `$${subtotal.toFixed(2)}`;
    confirmedItems.append(confirmedItem);
  });

  // Do not confirm an empty order or reopen an already open dialog.
  if (confirmedItems.children.length === 0 || orderConfirmation.open) return;

  confirmedTotal.textContent = `$${orderTotal.toFixed(2)}`;
  orderConfirmation.showModal();
});

// Rebuild the cart using the current product quantities.
function updateCart() {
  let totalQuantity = 0;
  let totalPrice = 0;
  cartItems.replaceChildren();

  productCards.forEach((productCard) => {
    const quantityValue = productCard.querySelector('.quantity-control__value');
    const quantity = Number(quantityValue.textContent);

    // Products with zero quantity do not need a cart row.
    productCard.classList.toggle('is-selected', quantity > 0);
    if (quantity === 0) return;

    const name = productCard.querySelector('.product-card__name').textContent;
    const priceText = productCard.querySelector('.product-card__price').textContent;
    const price = Number(priceText.replace('$', ''));
    const subtotal = price * quantity;

    totalQuantity += quantity;
    totalPrice += subtotal;

    const cartItem = cartItemTemplate.content.cloneNode(true);
    cartItem.querySelector('.cart-item__name').textContent = name;
    cartItem.querySelector('.cart-item__quantity').textContent = `${quantity}x`;
    cartItem.querySelector('.cart-item__unit-price').textContent = `@ $${price.toFixed(2)}`;
    cartItem.querySelector('.cart-item__subtotal').textContent = `$${subtotal.toFixed(2)}`;
    const removeButton = cartItem.querySelector('.cart-item__remove');
    removeButton.setAttribute('aria-label', `Remove ${name} from cart`);
    removeButton.addEventListener('click', () => {
      quantityValue.textContent = '0';
      productCard.querySelector('.quantity-control').hidden = true;
      const addButton = productCard.querySelector('.add-to-cart');
      addButton.hidden = false;
      updateCart();
      addButton.focus();
    });
    cartItems.append(cartItem);
  });

  cartCount.textContent = totalQuantity;
  cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
  cartEmpty.hidden = totalQuantity > 0;
  cartFilled.hidden = totalQuantity === 0;

  // Announce updates through the HTML element with role="status".
  if (totalQuantity === 0) {
    cartStatus.textContent = 'Your cart is empty.';
  } else {
    const itemLabel = totalQuantity === 1 ? 'item' : 'items';
    cartStatus.textContent = `${totalQuantity} ${itemLabel} in your cart. Order total: $${totalPrice.toFixed(2)}.`;
  }
}

// Set up the controls separately for each product.
productCards.forEach((productCard) => {
  const addToCartButton = productCard.querySelector('.add-to-cart');
  const quantityControl = productCard.querySelector('.quantity-control');
  const quantityValue = productCard.querySelector('.quantity-control__value');
  const increaseButton = productCard.querySelector('.quantity-control__increase');
  const decreaseButton = productCard.querySelector('.quantity-control__decrease');

  addToCartButton.addEventListener('click', () => {
    addToCartButton.hidden = true;
    quantityControl.hidden = false;
    quantityValue.textContent = '1';
    updateCart();
    increaseButton.focus();
  });

  increaseButton.addEventListener('click', () => {
    let quantity = Number(quantityValue.textContent);
    quantity += 1;
    quantityValue.textContent = quantity;
    updateCart();
  });

  decreaseButton.addEventListener('click', () => {
    let quantity = Number(quantityValue.textContent);
    if (quantity > 0) {
      quantity -= 1;
      quantityValue.textContent = quantity;
    }

    if (quantity === 0) {
      quantityControl.hidden = true;
      addToCartButton.hidden = false;
      addToCartButton.focus();
    }

    updateCart();
  });
});
