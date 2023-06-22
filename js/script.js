// Check if user is logged in
var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (loggedInUser) {
    // User is logged in
    showLoggedInView(loggedInUser);

} else {
    showLoggedOutView();
}

// Log Out Button
document.getElementById('logoutButton').addEventListener('click', function() {
    // Remove logged in user from Local Storage
    localStorage.removeItem('loggedInUser');
    showLoggedOutView();
    window.location.href = 'index.html';
});

// todo button
document.getElementById('todoID').addEventListener('click', function() {
    if (loggedInUser) {
        // User is logged in
        window.location.href = 'todo.html';
    
    } else {
        window.location.href = 'signin.html';
    }
});

// start button
document.getElementById('startID').addEventListener('click', function() {
    if (loggedInUser) {
        // User is logged in
        window.location.href = 'todo.html';
    
    } else {
        window.location.href = 'signin.html';
    }
});

// try button
document.getElementById('tryID').addEventListener('click', function() {
    if (loggedInUser) {
        // User is logged in
        window.location.href = 'todo.html';
    
    } else {
        window.location.href = 'signin.html';
    }
});

// Function to show view for logged in user
function showLoggedInView(user) {
    var currentPage = window.location.pathname.split('/').pop();
    var loginOkElement = document.getElementById('login-ok');
    var loginNokElement = document.getElementById('login-nok');
    var userContainer = document.getElementById('userContainer');
    var imgElement = document.querySelector('#login-ok img');
  
    loginOkElement.style.display = 'block';
    loginNokElement.style.display = 'none';
    imgElement.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png';
    imgElement.className = 'avatar-img width-40';

    if (currentPage === 'index.html') {
        userContainer.textContent = ', ' + user.name;
      }
}
  
// Function to show view for logged out user
function showLoggedOutView() {
    var loginOkkElement = document.getElementById('login-okk');
    var loginOkElement = document.getElementById('login-ok');
    var loginNokElement = document.getElementById('login-nok');
    
    loginOkkElement.style.display = 'none';
    loginOkElement.style.display = 'none';
    loginNokElement.style.display = 'block';
}


function disableResize(event) {
    event.target.style.resize = "none";
}  