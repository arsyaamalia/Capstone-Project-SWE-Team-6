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
