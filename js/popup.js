 // popup create code start 
 function createPopup(popupTriggerClass, closePopupClass) {
  const popupTriggers = document.querySelectorAll(
    `.${popupTriggerClass}`
  );
  const closePopups = document.querySelectorAll(`.${closePopupClass}`);

  popupTriggers.forEach((popupTrigger) => {
    const popupId = popupTrigger.getAttribute("data-popup");
    const popup = document.getElementById(popupId);
    const popupContent = popup.querySelector(".popupContent");

 
    popupTrigger.addEventListener("click", function () {
      popup.style.display = "flex";
      popupContent.innerHTML = getContentForPopup(popupId);
    });
  });

  closePopups.forEach((closePopup) => {
    const popup = closePopup.closest(".popup");

    closePopup.addEventListener("click", function () {
      popup.style.display = "none"; 
    });
  });
}

// Initialize popups
createPopup("popupTrigger", "closePopup");


 


  document.addEventListener("DOMContentLoaded", function() {
    var referralCode = document.getElementById("referralCode");
    var referralInput = document.getElementById("referralInput");

    referralCode.addEventListener("click", function() {
      referralCode.classList.toggle("hidden");
      referralInput.classList.toggle("hidden");
    });
  });
  
// small toggle menu start 
function smallToggleMenu() {
  var menu = document.getElementById('smallDeviceMenu');
  menu.classList.toggle('translate-x-full');
}


  

  
const leftSideLinks = document.querySelectorAll('.UserNavItems');
const contentSections = document.querySelectorAll('.content');

leftSideLinks.forEach((link, index) => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        // Remove the "active" class from all links
        leftSideLinks.forEach((otherLink) => {
            otherLink.classList.remove('active');
        });

        // Add the "active" class to the clicked link
        this.classList.add('active');

        const targetContentId = this.getAttribute('data-target');
        updateRightSideContent(targetContentId, index);
    });
});

function updateRightSideContent(targetContentId, index) {
    contentSections.forEach(content => {
        content.classList.remove('active');
    });

    const selectedContent = document.getElementById(targetContentId);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // You can add additional logic here to customize the content based on the targetContentId
    console.log(`Switched to content section: ${targetContentId}`);
}



