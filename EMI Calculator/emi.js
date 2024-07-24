const  principal = document.querySelector('.input-loan');
const  interest = document.querySelector('.input-interest');
const  tenure = document.querySelector('.input-months');
const  calculate = document.querySelector('.calculate');
const  emi = document.querySelector('.emi');
console.log(principal, interest, tenure);

function calculateEMI() {
    if( principal.value === '' || interest.value === '' || tenure.value === '') {
        alert('Please enter all the values');
        return;
    }else{
        const p = principal.value;
        const r = interest.value / 1200;
        const n = tenure.value;
        const emiValue = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);
        emi.textContent = emiValue.toFixed(2);
    }
}

calculate.addEventListener('click', calculateEMI);