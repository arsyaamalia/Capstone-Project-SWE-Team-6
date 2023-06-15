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
      window.location.href = 'dashboard.html';
    }, 300); 
  }

  const errorMessage = document.getElementById('error-message');

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Submit form dlu mazzeh
  
    // ngambil data input
    var username = document.getElementById('username-email').value;
    var password = document.getElementById('password').value;
  
    // Login DUMMY masbro
    if (username === 'Arsya110' && password === 'password') {
      // OTW ke dashboard
      window.location.href = 'dashboard.html';
    } else {
      showErrorMessage('Invalid username or password');
    }
  
    // Hapus isian
    document.getElementById('username-email').value = '';
    document.getElementById('password').value = '';
  });

