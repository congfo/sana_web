document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    // Specific username and password
    const validUsername = "5/17";
    const validPassword = "7/27";
  
    if (username === validUsername && password === validPassword) {
      // Redirect to another page on successful login
      window.location.href = "dashboard.html";
    } else {
      // Display error message
      errorMessage.textContent = "Invalid username or password!";
      errorMessage.style.color = "red";
    }
  });
  