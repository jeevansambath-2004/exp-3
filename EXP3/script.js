document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function validatePassword(password) {
        return password.length >= 6;
    }
    
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const username = document.getElementById("signupUsername").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value;
        const confirmPassword = document.getElementById("signupConfirmPassword").value;
        
        if (!username) {
            alert("Username is required");
            return;
        }
        
        if (!validateEmail(email)) {
            alert("Invalid email format");
            return;
        }
        
        if (!validatePassword(password)) {
            alert("Password must be at least 6 characters long");
            return;
        }
        
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        
        alert("Registration successful!");
        signupForm.reset();
    });
    
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;
        
        if (!validateEmail(email)) {
            alert("Invalid email format");
            return;
        }
        
        if (!validatePassword(password)) {
            alert("Invalid password");
            return;
        }
        
        alert("Login successful!");
        loginForm.reset();
    });
});
