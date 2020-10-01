const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => qty - 1;
const subTotal = (price, qty) => price * qty;

function disableDecrement(qty) {
    if (qty == 1) {
        return disable = true;
    } else {
        return disable = false;
    }
}
function codeDisc(price, code) {
    var priceDisc = 0;
    if (code == "PROMO50") {
        priceDisc = price - (price / 100 * 50);
    } else if (code == "PROMO25") {
        priceDisc = price - (price / 100 * 25);
    } else if (code == "PROMO10") {
        priceDisc = price - (price / 100 * 10);
    } else if (code == "PROMO5") {
        priceDisc = price - (price / 100 * 5);
    } else if (code == "") {
        priceDisc = "errorIsEmpty";
    } else {
        priceDisc = "errorCodeNotFound";
    }
    return priceDisc;
}

module.exports = {
    incrementQty,
    decrementQty,
    subTotal,
    disableDecrement,
    codeDisc
};
