const ps = document.querySelector('#password')
const ps2 = document.querySelector('#password_repeat')
const message = document.querySelector('#message')

const submit = document.querySelector('#submit').addEventListener('click', checkSame)

function checkSame() {
    if (ps.value !== ps2.value) {
        message.textContent = 'PASSWORDS DO NOT MATCH';
        message.style.visibility = 'show';
    }
    else{
        message.style.display = none;
    }
}

const rangevalue = document.querySelector('#range_value')
const range = document.querySelector('#r')

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}