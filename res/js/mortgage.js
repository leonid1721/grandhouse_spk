// Вводные

const loanAmountPackage = document.getElementById("loanAmountPackage");
const interestRate = document.getElementById("interestRate");
const downPayment = document.getElementById("downPayment");
const loanTerm = document.getElementById("loanTerm");

let discount = 0.93;
let minDownPayment = 0.15;
let maxDownPayment = 0.90;

// Результаты

const loanAmountInitialPrice = document.getElementById("loanAmountInitialPrice");
const loanAmountFinalPrice = document.getElementById("loanAmountFinalPrice");

const downPaymentNumber = document.getElementById("downPaymentNumber");

const monthlyPayment = document.getElementById("monthlyPayment");

// Listeners

loanAmountInitialPrice.innerHTML = loanAmountPackage.value;
loanAmountFinalPrice.innerHTML = Math.round((loanAmountPackage.value * discount) / 1000) * 1000;

loanAmountPackage.addEventListener('change', function(){

    loanAmountInitialPrice.innerHTML = this.value;

    const finalPrice = Math.round((this.value * discount) / 1000) * 1000;
    loanAmountFinalPrice.innerHTML = finalPrice;

    downPayment.min = finalPrice * minDownPayment;
    downPayment.max = finalPrice * maxDownPayment;

});


downPaymentNumber.innerHTML = downPayment.value;

downPayment.addEventListener('mousemove', function(){

    downPaymentNumber.innerHTML = this.value;

});




