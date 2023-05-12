function increment(quantity1, quantity2, quantity3, quantity4, quantity5, quantity6, quantity7) {
    const input = document.getElementById(quantity1);
    let quantity = parseInt(input.value);
    quantity++;
    input.value = quantity;
    updateCart();
}

function decrement(quantity1, quantity2, quantity3, quantity4, quantity5, quantity6, quantity7) {
    const input = document.getElementById(quantity1);
    let quantity = parseInt(input.value);
    if (quantity > 0) {
        quantity--;
        input.value = quantity;
        updateCart();
    }
}

function updateCart() {
    let totalItems = 0;
    let totalOrder = 0;
    const shippingFee = 50;

    // Loop through each product
    for (let i = 1; i <= 7; i++) {
        const inputId = 'quantity' + i;
        const quantity = parseInt(document.getElementById(inputId).value);
        totalItems += quantity;
        totalOrder += quantity * 450;
    }

    // Update the number of items
    document.getElementById('numItems').textContent = totalItems;

    // Calculate and update the total order
    const totalWithShipping = totalOrder + shippingFee;
    document.getElementById('totalOrder').textContent = '₱' + totalWithShipping.toFixed(2);
}
function updateCart() {
    let totalItems = 0;
    let totalOrder = 0;

    // Loop through each product
    for (let i = 1; i <= 7; i++) {
        const inputId = 'quantity' + i;
        const quantity = parseInt(document.getElementById(inputId).value);
        totalItems += quantity;
        totalOrder += quantity * 450;
    }

    // Update the number of items
    document.getElementById('numItems').textContent = totalItems;

    // Calculate the total order (excluding shipping fee)
    const totalWithoutShipping = totalOrder;

    // Update the total order display
    document.getElementById('totalOrder').textContent = '₱' + totalWithoutShipping.toFixed(2);

    // Display the shipping fee
    const shippingFee = totalItems > 0 ? 50 : 0; // Set shipping fee to 50 if there are items in the cart, otherwise set it to 0
    document.getElementById('shippingFee').textContent = '₱' + shippingFee.toFixed(2);

    // Calculate the total order with shipping fee
    const totalWithShipping = totalWithoutShipping + shippingFee;
    document.getElementById('totalOrder').textContent = '₱' + totalWithShipping.toFixed(2);
}
function checkout() {
    const totalItems = parseInt(document.getElementById('numItems').textContent);
    if (totalItems === 0) {
        alert("Your cart is empty. Please add items before checking out.");
        return;
    }

    const totalOrder = parseFloat(document.getElementById('totalOrder').textContent.substr(1));
    alert("Thank you for shopping! Your total payment is: ₱" + totalOrder.toFixed(2) + ". Please settle the payment.");

    // Reset quantities and clear the form
    for (let i = 1; i <= 7; i++) {
        const inputId = 'quantity' + i;
        document.getElementById(inputId).value = 0;
    }

    updateCart();
}




