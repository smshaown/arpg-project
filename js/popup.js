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


  

  