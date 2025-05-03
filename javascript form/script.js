document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signupForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        
        let valid = true;

        // Name validation
        let name = document.getElementById("name").value;
        let nameError = document.getElementById("nameError");
        if (name.trim() === "") {
            nameError.textContent = "Name is required.";
            valid = false;
        } else {
            nameError.textContent = "";
        }

        // Email validation
        let email = document.getElementById("email").value;
        let emailError = document.getElementById("emailError");
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = "Enter a valid email.";
            valid = false;
        } else {
            emailError.textContent = "";
        }

        // Password validation
        let password = document.getElementById("password").value;
        let passwordError = document.getElementById("passwordError");
        if (password.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters.";
            valid = false;
        } else {
            passwordError.textContent = "";
        }

        if (valid) {
            alert("Form submitted successfully!");
        }
    });
});