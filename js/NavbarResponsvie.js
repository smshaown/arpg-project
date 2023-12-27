document.addEventListener("DOMContentLoaded", function () {
  const toggleNavbar = document.getElementById("toggleNavbar");
  const navbar = document.getElementById("navbar");
  const body = document.body;
  const navbarOverlay = document.getElementById("navbarOverlay");

  toggleNavbar.addEventListener("click", function (event) {
    event.stopPropagation();
    navbar.classList.toggle("invisible");
    navbar.classList.toggle("opacity-100");
    navbar.classList.toggle("transform");

    // Toggle the overlay visibility
    navbarOverlay.style.display = navbarOverlay.style.display === "none" ? "block" : "none";
  });

  document.addEventListener("click", function (event) {
    const isNavbar = event.target.closest("#navbar");
    const isToggleNavbar = event.target.closest("#toggleNavbar");

    if (!isNavbar && !isToggleNavbar) {
      navbar.classList.add("invisible");
      navbar.classList.remove("opacity-100", "transform");
      navbarOverlay.style.display = "none"; // Hide the overlay
    }
  });

  // Close navbar on window resize if width is greater than 762px
  window.addEventListener("resize", function () {
    if (window.innerWidth > 762) {
      navbar.classList.add("invisible");
      navbar.classList.remove("opacity-100", "transform");
      navbarOverlay.style.display = "none"; // Hide the overlay
    }
  });
});