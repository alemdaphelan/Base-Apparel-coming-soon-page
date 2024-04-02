const emailInput = document.getElementById('email-input');
const submitBtn = document.getElementById('submit-btn');
const img = document.getElementById('img');
const errorMsg = document.getElementById('error-msg');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
document.getElementById('email-form').addEventListener('submit', (e) => {
    e.preventDefault();
    updateUI();
})
const updateUI = () => {
    if (emailInput.value && emailRegex.test(emailInput.value)) {
        alert('Successful.');
        emailInput.value = '';
        emailInput.style.borderColor = "hsl(0, 36%, 70%)";
        emailInput.style.backgroundImage = "";
        errorMsg.textContent = "";
        return;
    }
    else {
        emailInput.style.borderColor = "hsl(0, 93%, 68%)";
        errorMsg.textContent = `Please provide a valid email.`;
        emailInput.style.backgroundImage = "url('img/icon-error.svg')";
    }
};

const mediaQuery = window.matchMedia('(max-width: 400px)');