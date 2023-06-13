// Memilih elemen-elemen HTML
const registerForm = document.getElementById('register-form');
const popupOkBtn = document.getElementById('popup-ok-btn');

// Menambahkan event listener ke form registrasi
registerForm.addEventListener('submit', handleRegistration);

// Fungsi untuk menangani registrasi
function handleRegistration(event) {
  event.preventDefault();

  // Ambil data dari form
  const username = document.getElementById('username').value;
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Lakukan validasi atau proses registrasi sesuai kebutuhan

  // Menampilkan pop-up registrasi berhasil
  showRegisterSuccessPopup();
}

// Fungsi untuk menampilkan pop-up registrasi berhasil
function showRegisterSuccessPopup() {
  // Membuat elemen pop-up register
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

  // Menambahkan elemen-elemen ke dalam pop-up register
  popupContent.appendChild(popupTitle);
  popupContent.appendChild(popupMessage);
  popupContent.appendChild(popupOkBtn);
  registerSuccessPopup.appendChild(popupContent);

  // Menambahkan pop-up register ke dalam body
  document.body.appendChild(registerSuccessPopup);

  // Menambahkan event listener ke tombol "OK" pada pop-up
  popupOkBtn.addEventListener('click', redirectToLogin);
}

// Fungsi untuk mengarahkan pengguna ke halaman login
function redirectToLogin() {
  window.location.href = 'signin.html';
}

