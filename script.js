
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
function toggleSubMenu(event) {
  event.preventDefault();
  var submenu = event.currentTarget.querySelector('.submenu');
  var icon = event.currentTarget.querySelector('.icon');
  submenu.classList.toggle('open');
  icon.classList.toggle('rotate');
}

// login referral code 

