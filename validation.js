// Email and Password Validation
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('signupError');
  
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      errorMessage.textContent = "Invalid email format.";
      return;
    }
    if (password.length < 6) {
      errorMessage.textContent = "Password must be at least 6 characters.";
      return;
    }
  
    errorMessage.textContent = "";
    // Proceed with signup
    alert("Sign up successful!");
  });
  