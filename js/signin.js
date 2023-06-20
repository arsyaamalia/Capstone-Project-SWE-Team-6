const errorMessage = document.getElementById('error-message');

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Submit form dlu mazzeh
  
    // ngambil data input
    var loginInput = document.getElementById('username-email').value;
    var password = document.getElementById('password').value;
  
    // Check if user exists in Local Storage
  var users = JSON.parse(localStorage.getItem('users')) || [];

  var foundUser = users.find(function(user) {
    return (user.username === loginInput || user.email === loginInput) && user.password === password;
  });

  if (foundUser) {
    // Login successful
    localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
    window.location.href = 'index.html';
  } else {
    // Login unsuccessful
    showErrorMessage('Invalid username or password');
  }
  
    // Hapus isian
    document.getElementById('username-email').value = '';
    document.getElementById('password').value = '';
  });

  document.addEventListener('DOMContentLoaded', function() {
    var boxForm = document.querySelector('.box-form');
    boxForm.style.opacity = '1';
});

  // Nampilin gagal login
  function showErrorMessage(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
  }

  function redirectToDashboard() {
    // Mnambahin css 
    document.body.classList.add('hidden-page');
  
    // atur timeout
    setTimeout(function() {
      // otw dashboard
      window.location.href = 'index.html';
    }, 300); 
  }

  const passwordInput = document.getElementById("password");
  const passwordToggle = document.getElementById("password-toggle");
  
  passwordToggle.addEventListener("click", togglePasswordVisibility);
  
  function togglePasswordVisibility() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggle.innerHTML = '<img src="icon/hide.png" alt="" class="width-15">';
    } else {
      passwordInput.type = "password";
      passwordToggle.innerHTML = '<img src="icon/view.png" alt="" class="width-15">';
    }
  }