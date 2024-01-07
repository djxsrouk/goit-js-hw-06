const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", function () {
    event.preventDefault();
    const email = this.elements.email.value.trim();
    const password = this.elements.password.value.trim();
    if (!email || !password) {
        alert("Fill in all the required fields!");
    } else {
        const formData = {
            email: email,
            password: password,
        };
        console.log(formData);
        this.reset();
    }
});
