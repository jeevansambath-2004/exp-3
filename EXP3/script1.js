document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        const loginEmail = document.getElementById("loginEmail").value;
        const loginPassword = document.getElementById("loginPassword").value;
        const captchaResponse = grecaptcha.getResponse(); // Get reCAPTCHA response

        // Validate reCAPTCHA
        if (!captchaResponse) {
            alert("Please complete the CAPTCHA verification.");
            return;
        }

        // Perform validation
        if (loginEmail === "" || loginPassword === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Email validation (basic regex for demonstration purposes)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(loginEmail)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Password validation (at least 8 characters with a mix of letters and numbers)
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordPattern.test(loginPassword)) {
            alert("Password must be at least 8 characters long and contain both letters and numbers.");
            return;
        }

        // Replace these with your actual login logic or API call
        const correctEmail = "jeevan@gmail.com";
        const correctPassword = "jeevansam23";

        if (loginEmail !== correctEmail || loginPassword !== correctPassword) {
            alert("Incorrect email or password. Please try again.");
            return;
        }

        // Example: Show a success message
        alert("Login successful!");

        // Reset the form after submission (optional)
        loginForm.reset();

        // Reset CAPTCHA after submission
        grecaptcha.reset();
    });
});
