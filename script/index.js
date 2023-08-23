// Apply Button Action
document.getElementById('apply-btn').addEventListener('click', function () {
    // Step-3
    const discountAmount = document.getElementById('discount-amount')
    const discountedTotalAmount = document.getElementById('discount-total')
    const couponField = document.getElementById('coupon-field').value

    if (couponField === "SELL200") {
        const discount = (totalCost / 100) * 20
        const discountUpdate = totalCost - discount
        discountAmount.innerText = parseInt(discount).toFixed(2)
        discountedTotalAmount.innerText = discountUpdate.toFixed(2)
    } else {
        alert("Please input SELL200")
    }
})

// Cart Section Calculation
let totalCost = 0
function handleCLikBtn(target) {
    // Step-1
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const newCart = document.createElement('li')
    newCart.innerText = itemName
    const cartItems = document.getElementById('cart-items')
    cartItems.appendChild(newCart)

    // Step-2
    const perItemPrice = target.childNodes[3].childNodes[5].childNodes[1].innerText;
    const itemTotalPrice = document.getElementById('total-price')
    totalCost = parseInt(totalCost) + parseInt(perItemPrice)
    itemTotalPrice.innerText = totalCost.toFixed(2)

    // Step-4
    const applyButton = document.getElementById('apply-btn')
    if (totalCost >= 200) {
        applyButton.style.backgroundColor = '#E527B2'
        applyButton.removeAttribute('disabled')
    } else {
        applyButton.style.backgroundColor = '#F9A8D4'
        applyButton.setAttribute('disabled', true)
    }

    // Step-5
    const purchaseButton = document.getElementById('purchase-btn')
    if (totalCost > 0) {
        purchaseButton.style.backgroundColor = '#E527B2'
        purchaseButton.removeAttribute('disabled')
        return
    } else {
        purchaseButton.style.backgroundColor = '#F9A8D4'
        purchaseButton.setAttribute('disabled', true)
        return
    }
}

// Step-6
// Default Cart & Payment:
function defaultHome() {
    document.getElementById('cart-items').innerText = '';
    document.getElementById('total-price').innerText = '00';
    document.getElementById('discount-amount').innerText = '00';
    document.getElementById('discount-total').innerText = '00';
    document.getElementById('coupon-field').value = '';
}