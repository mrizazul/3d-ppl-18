import {
  incrementQty,
  decrementQty,
  subTotal,
  disableDecrement,
  codeDisc
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const txtSubTotal = document.querySelector('#subtotal');
const priceInput = document.querySelector('#price');
const codeButton = document.querySelector('#confirmButton');
const codeInput = document.querySelector('#code');

var result;

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  decrButton.disabled = disableDecrement(qtyInput.value);
  txtSubTotal.textContent = subTotal(priceInput.value, qtyInput.value);
  codeInput.value = null;
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  decrButton.disabled = disableDecrement(qtyInput.value);
  txtSubTotal.textContent = subTotal(priceInput.value, qtyInput.value);
  codeInput.value = null;
});

codeButton.addEventListener('click', () => {
  result = codeDisc(subTotal(priceInput.value, qtyInput.value), codeInput.value);
  if (result == "errorCodeNotFound") {
    alert("Kode tidak ditemukan !");
  } else {
    txtSubTotal.textContent = result;
  }
});