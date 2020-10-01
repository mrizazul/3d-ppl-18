/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const helper = require('../helpers');

//1. Testing qty tambah 2
test('jika qty adalah 1, ketika ditambah 2 jadi = 3', () => {
    expect(helper.incrementQty(2)).toBe(3);
});

//2. Testing qty kurangi 1
test('jika qty adalah 2, ketika dikurang 1 jadi = 1', () => {
    expect(helper.decrementQty(2)).toBe(1);
});

//3. Testing disable button decrement ketika qty == 1
test('jika qty adalah 1, decrement button disabled = true', () => {
    expect(helper.disableDecrement(1)).toBeTruthy();
});

//4. Testing subtotal
test('jika price = 50000 dan qty = 2, maka subtotal = 100000', () => {
    expect(helper.subTotal(50000, 2)).toBe(100000);
});

//5. Testing diskon 50 persen
test('jika subtotal 50000, kode = KD50, maka subtotal = 25000', () => {
    expect(helper.codeDisc(50000, "PROMO50")).toBe(25000);
});

//6. Testing input text diskon kosongan
test('jika subtotal 50000, kode = "" , maka subtotal = 50000', () => {
    expect(helper.codeDisc(50000, "")).toBe("errorIsEmpty");
});

//7. Testing input text diskon isi random
test('jika subtotal 50000, kode = "" , maka subtotal = 50000', () => {
    expect(helper.codeDisc(50000, "apa")).toBe("errorCodeNotFound");
});