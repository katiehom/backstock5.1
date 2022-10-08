const login = document.getElementById('login')
const signup = document.getElementById('signup')
const confirm = document.getElementById('confirm')
const password = document.getElementById('floatingPassword')
const signupPassword = document.getElementById('floatingSignupPassword')
const confirmPassword = document.getElementById('floatingConfirmPassword')

login ? 
    login.addEventListener("click", function() {
        const type = password.getAttribute("type") === "password" ? "text" : "password"
        password.setAttribute("type", type)
        login.classList.toggle("fa-eye")
})

: 
signup.addEventListener("click", function() {
    const type = signupPassword.getAttribute("type") === "password" ? "text" : "password"
    signupPassword.setAttribute("type", type)
    signup.classList.toggle("fa-eye")
})

confirm.addEventListener("click", function() {
    const type = confirmPassword.getAttribute("type") === "password" ? "text" : "password"
    confirmPassword.setAttribute("type", type)
    confirm.classList.toggle("fa-eye")
})


