document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    // Show the pop-up
    showPopup();
  });
  
  function showPopup() {
    // Create pop-up element
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.classList.add('popup-container');
  
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
  
    const popupTitle = document.createElement('h2');
    popupTitle.textContent = 'Success!';
  
    const popupMessage = document.createElement('p');
    popupMessage.textContent = 'Thank you for contacting us. We will get back to you soon.';
  
    const popupCloseBtn = document.createElement('button');
    popupCloseBtn.id = 'popup-close-btn';
    popupCloseBtn.textContent = 'Close';
  
    // Add elements to the pop-up
    popupContent.appendChild(popupTitle);
    popupContent.appendChild(popupMessage);
    popupContent.appendChild(popupCloseBtn);
    popup.appendChild(popupContent);
  
    // Add the pop-up to the body
    document.body.appendChild(popup);
  
    // Add event listener to the "Close" button on the pop-up
    popupCloseBtn.addEventListener('click', function() {
      // Remove the pop-up from the body
      document.body.removeChild(popup);
    });
  }
  