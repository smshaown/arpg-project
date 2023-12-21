
	// SIDEBAR COLLAPSE
	const toggleSidebar = document.querySelector('nav .toggle-sidebar');
	const toggleCategories = document.querySelector('.toggle-categories');
	const allSideDivider = document.querySelectorAll('#sidebar .divider');
	const allDropdown = document.querySelectorAll('.dropdown'); 
	const sidebar = document.getElementById('sidebar'); 

	// Function to toggle sidebar state
	function toggleSidebarState() {
	sidebar.classList.toggle('hide');

	if (sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item => {
		item.textContent = '-';
		});

		allDropdown.forEach(item => {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
		});
	} else {
		allSideDivider.forEach(item => {
		item.textContent = item.dataset.text;
		});
	}
	}

	
	toggleCategories.addEventListener('click', function (event) {
	event.preventDefault(); 
	toggleSidebarState();
	});

	
	toggleSidebar.addEventListener('click', function () {
	toggleSidebarState();
	});




// Right Side Bar Create the page start


function changeContent(content, clickedLink) {
  var rightSidebarContent = document.getElementById("right-sidebar-content");
  var contentDiv = document.getElementById(content);

  if (rightSidebarContent && contentDiv) {
    var allContentDivs =
      rightSidebarContent.getElementsByClassName("content-div");
    for (var i = 0; i < allContentDivs.length; i++) {
      allContentDivs[i].style.display = "none";
    }

    contentDiv.style.display = "block";

    // Remove the 'active-link' class from all links
    var allLinks = document.querySelectorAll(".submenu-link");
    allLinks.forEach(function (link) {
      link.classList.remove("active-link");
    });

    // Add the 'active-link' class to the clicked link
    if (clickedLink) {
      clickedLink.classList.add("active-link");
    }
  }
}



// product deatils 
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


