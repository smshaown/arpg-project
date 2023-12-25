
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


//   swiper js code start


//   swiper js code start end

 // Open the first tab by default
 // JSON data representing tabs and content
 

 // Open the first tab by default
 openTab(1);

 function openTab(tabNumber) {
  // Hide all tabs first
  const allTabs = document.querySelectorAll('#right-side .career-tab-content');
  allTabs.forEach(tab => tab.classList.remove('active'));

  // Remove active class from all tabs
  const tabLinks = document.querySelectorAll('#tabs li a');
  tabLinks.forEach(link => link.classList.remove('active'));

  // Show the selected tab
  const selectedTab = document.getElementById(`tab-${tabNumber}`);
  selectedTab.classList.add('active');

  // Add active class to the clicked tab link
  const clickedTabLink = document.querySelector(`#tabs li:nth-child(${tabNumber}) a`);
  clickedTabLink.classList.add('active'); // Add the 'active' class here
}


// toggle list show and hidden 
function toggleList() {
    var list = document.getElementById('prescriptionList');
    var header = document.getElementById('toggleHeader');
    var icon = document.getElementById('toggleIcon');

    list.classList.toggle('prescriptionListHidden');
    list.classList.toggle('prescriptionListVisible');
    
    
    icon.classList.toggle('rotate180');
  }

// tabs start 
  document.querySelector('.flex button:first-child').classList.add('bg-[#008069]', 'text-[#fff]', 'border-hidden');

  function toggleButton(button) {
    document.querySelectorAll('.flex button').forEach(function(btn) {
      btn.classList.remove('bg-[#008069]', 'text-[#fff]', 'border-hidden');
    });

    button.classList.add('bg-[#008069]', 'text-[#fff]', 'border-hidden');
  }
// tabs end 

