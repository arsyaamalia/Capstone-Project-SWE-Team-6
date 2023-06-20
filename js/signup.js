// Memilih elemen-elemen HTML
const registerForm = document.getElementById('register-form');
const popupOkBtn = document.getElementById('popup-ok-btn');
const errorMessage  = document.getElementById('error-message');

// Menambahkan event listener ke form registrasi
registerForm.addEventListener('submit', handleRegistration);

// Fungsi untuk menangani registrasi
function handleRegistration(event) {
  event.preventDefault();

  // Ambil data dari form
  const username = document.getElementById('username').value;
  const name = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Lakukan validasi atau proses registrasi sesuai kebutuhan
  var users = JSON.parse(localStorage.getItem('users')) || [];

  var foundUser = users.find(function(user) {
    return user.username === username || user.email === email;
  });

  if (foundUser) {
    // User dah ada
    showErrorMessage('Username atau email-nya dah kepake ceunah, ganti deh mending');
  } else {
    // Register new user
    var newUser = {
      username: username,
      password: password,
      name: name,
      email: email
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  // Nampilin pop-up registrasi berhasil
  showRegisterSuccessPopup();
  }
}

// Fungsi untuk nampilin pop-up registrasi berhasil
function showRegisterSuccessPopup() {
  // buat elemen pop-up register
  const registerSuccessPopup = document.createElement('div');
  registerSuccessPopup.id = 'register-success-popup';
  registerSuccessPopup.classList.add('popup-container');

  const popupContent = document.createElement('div');
  popupContent.classList.add('popup-content');

  const popupTitle = document.createElement('h2');
  popupTitle.textContent = 'Registration Successful!';

  const popupMessage = document.createElement('p');
  popupMessage.textContent = 'Your account has been successfully registered.';

  const popupOkBtn = document.createElement('button');
  popupOkBtn.id = 'popup-ok-btn';
  popupOkBtn.textContent = 'OK';

  // nambahin elemen-elemen ke dalam pop-up register
  popupContent.appendChild(popupTitle);
  popupContent.appendChild(popupMessage);
  popupContent.appendChild(popupOkBtn);
  registerSuccessPopup.appendChild(popupContent);

  // nambahin pop-up register ke dalam body
  document.body.appendChild(registerSuccessPopup);

  // nambahin event listener ke tombol "OK" pada pop-up
  popupOkBtn.addEventListener('click', redirectToLogin);
}

document.addEventListener('DOMContentLoaded', function() {
  var boxForm = document.querySelector('.box-form');
  boxForm.style.opacity = '1';
});

// Fungsi buat pengguna otw ke halaman login
function redirectToLogin() {
  window.location.href = 'signin.html';
}

 // Nampilin gagal regis
 function showErrorMessage(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
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