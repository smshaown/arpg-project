function createPopup(popupTriggerId, popupId, closePopupId) {
    const popupTrigger = document.getElementById(popupTriggerId);
    const popup = document.getElementById(popupId);
    const closePopup = document.getElementById(closePopupId);
  
    // Event listener for opening the popup
    popupTrigger.addEventListener("click", function () {
      popup.style.display = "flex"; // Show the popup
    });
  
    // Event listener for closing the popup
    closePopup.addEventListener("click", function () {
      popup.style.display = "none"; // Hide the popup
    });
  }
  
  // Initialize popups
  createPopup("Customer-popup1", "Customer-popup2", "Customer-close");