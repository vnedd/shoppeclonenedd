const modalLogin = document.querySelector('.js-modal__login')
const loginBtns = document.querySelectorAll('.js-login-btn')
const modalLoginCloses = document.querySelectorAll('.js-modal-login-close')

const modalRegister = document.querySelector('.js-modal__register')
const modalRegisterCloses = document.querySelectorAll('.js-modal-register-close')
const registerBtns = document.querySelectorAll('.js-register-btn')



function showRegisterModal() {
    modalRegister.classList.add('open_register')
    modalLogin.classList.remove('open_login')

}

function showLoginModal() {
    modalLogin.classList.add('open_login')
    modalRegister.classList.remove('open_register')

}

function hideLoginModal() {
    modalLogin.classList.remove('open_login')
}

function hideRegisterModal() {
    modalRegister.classList.remove('open_register')
}

 for (const loginBtn of loginBtns) {
    loginBtn.addEventListener('click', showLoginModal )
 }

 for (const registerBtn of registerBtns) {
    registerBtn.addEventListener('click', showRegisterModal )
 }

 for (const modalLoginClose of modalLoginCloses) {
    modalLoginClose.addEventListener('click',hideLoginModal )
 }
 for (const modalRegisterClose of modalRegisterCloses) {
    modalRegisterClose.addEventListener('click', hideRegisterModal )
 }



//  product slide

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("product__info-image-item");
  if (n > x.length) {
    slideIndex = 1
}
  if (n < 1) {
    slideIndex = x.length
}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}