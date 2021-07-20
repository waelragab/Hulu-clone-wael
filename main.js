let loginBtn = document.querySelector('.login-btn');
let close = document.querySelector('.close');
let loginContainer = document.querySelector('.modal');


loginBtn.addEventListener('click', () => {
    loginContainer.style.display = "flex";
})

close.addEventListener('click', () => {
    loginContainer.style.display = "none";
})