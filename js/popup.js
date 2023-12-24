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



  document.addEventListener("DOMContentLoaded", function () {
    // Get all tabs and content elements
    const tabs = document.querySelectorAll(".tab-user");
    const tabContents = document.querySelectorAll(".tab-content");

    // Add click event listeners to each tab
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", function (event) {
        event.preventDefault();

        // Hide all tab contents
        tabContents.forEach(content => content.classList.add("hidden"));

        // Show the clicked tab content
        const contentId = `content${index + 1}`;
        const selectedContent = document.getElementById(contentId);
        if (selectedContent) {
          selectedContent.classList.remove("hidden");
        }

        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove("active"));

        // Add active class to the clicked tab
        tab.classList.add("active");
      });
    });
  });