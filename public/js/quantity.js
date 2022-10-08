const quantityMinus = document.querySelector('#quantityMinus')
const quantityPlus = document.querySelector('#quantityPlus')
const idealQuantityMinus = document.querySelector('#idealQuantityMinus')
const idealQuantityPlus = document.querySelector('#idealQuantityPlus')

quantityMinus.addEventListener('click', minusOne)
quantityPlus.addEventListener('click', plusOne)
idealQuantityMinus.addEventListener('click', idealMinusOne)
idealQuantityPlus.addEventListener('click', idealPlusOne)

function minusOne() {
    document.getElementById('floatingQuantity').stepDown();
}
function plusOne() {
    document.getElementById('floatingQuantity').stepUp();
}
function idealMinusOne() {
    document.getElementById('floatingIdealQuantity').stepDown();
}
function idealPlusOne() {
    document.getElementById('floatingIdealQuantity').stepUp();
}
