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
  createPopup("Upload-Prescription-popup1", "Upload-Prescription-popup2", "Upload-Prescription-close");
  createPopup("ValidPrescription-popup1", "ValidPrescription-popup2", "ValidPrescription-popup-close");
  createPopup("Manage-Address-popup1", "Manage-Address-popup2", "Manage-Address-close");
  createPopup("addShippingAddress-popup1", "addShippingAddress-popup2", "addShippingAddress-close");
  createPopup("signup-popup1", "signup-popup2", "signup-close");
  createPopup("cart-popup-1", "cart-popup-2", "cart-close");



  document.addEventListener("DOMContentLoaded", function () {
   
    const tabs = document.querySelectorAll(".tab-user");
    const tabContents = document.querySelectorAll(".tab-content");

    
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", function (event) {
        event.preventDefault();

        
        tabContents.forEach(content => content.classList.add("hidden"));

        const contentId = `content${index + 1}`;
        const selectedContent = document.getElementById(contentId);
        if (selectedContent) {
          selectedContent.classList.remove("hidden");
        }
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
      });
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    var referralCode = document.getElementById("referralCode");
    var referralInput = document.getElementById("referralInput");

    referralCode.addEventListener("click", function() {
      referralCode.classList.toggle("hidden");
      referralInput.classList.toggle("hidden");
    });
  });


  