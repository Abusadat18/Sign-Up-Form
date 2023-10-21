const password = document.getElementById("password");
const rePassword = document.getElementById("rePassword");
const createBtn = document.querySelector(".create-btn");
const warningText = document.querySelector(".warning");

let passwordValue;
let rePasswordValue;

password.addEventListener("keydown", function () {
    passwordValue = password.value;
})

rePassword.addEventListener("keydown", function () {
    rePasswordValue = rePassword.value;
})

createBtn.addEventListener("click",function(){
if (passwordValue === rePasswordValue) {
    password.classList.remove("error");
    rePassword.classList.remove("error");
    warningText.classList.remove("show")
    createBtn.setAttribute("form","myForm")
} else {
    password.classList.add("error");
    rePassword.classList.add("error");
    warningText.classList.add("show");
    createBtn.removeAttribute("form");
}
})

