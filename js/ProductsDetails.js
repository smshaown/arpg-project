
// right side list show and hide  

// product deatils show all / show less
document.addEventListener('DOMContentLoaded', function () {
	const showAllToggle = document.getElementById('showAllToggle');
	const additionalOffersList = document.querySelectorAll('.flex.flex-row.items-center.gap-2.mb-1');
  
	for (let i = 3; i < additionalOffersList.length; i++) {
	  additionalOffersList[i].classList.add('hidden');
	}
  
	showAllToggle.addEventListener('click', function () {
	  for (let i = 3; i < additionalOffersList.length; i++) {
		additionalOffersList[i].classList.toggle('hidden');
	  }
  
	  showAllToggle.classList.toggle('show-all');
	  showAllToggle.classList.toggle('show-less');
  
	  const isShowingAll = showAllToggle.classList.contains('show-all');
	  showAllToggle.textContent = isShowingAll ? 'Show Less' : 'Show All';
	});
  });


//   thumable gallary 

var images = document.getElementsByTagName("img");

for (var i = 0; i < images.length; i++) {
  images[i].onmouseover = function() {
    this.style.cursor = "hand";
    // this.style.borderColor = "red";
  };
  images[i].onmouseout = function() {
    this.style.cursor = "pointer";
    // this.style.borderColor = "grey";
  };
}

function changeImageOnClick(event) {
  // debugger;
  var targetElement = event.srcElement;
  // debugger;
  if (targetElement.tagName === "IMG") {
    mainImage.src = targetElement.getAttribute("src");
  }
}



// icons shared icons show and hidden
var shareId = document.getElementById('shareId');
var iconShareId = document.getElementById('IconShareId');

shareId.addEventListener('click', function () {
    if (iconShareId.style.display === 'none' || iconShareId.style.display === '') {
        iconShareId.style.display = 'block';
        setTimeout(function () {
            iconShareId.style.opacity = '1';
        }, 10);
    } else {
        iconShareId.style.opacity = '0';
        setTimeout(function () {
            iconShareId.style.display = 'none';
        }, 300);
    }
});




