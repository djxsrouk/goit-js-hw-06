const validationInput = document.getElementById("validation-input");
validationInput.addEventListener("blur", function () {
    const enteredLength = this.value.length;
    const requiredLength = parseInt(this.getAttribute("data-length"));
    if (enteredLength === requiredLength) {
        this.classList.remove("invalid");
        this.classList.add("valid");
    } else {
        this.classList.remove("valid");
        this.classList.add("invalid");
    }
});