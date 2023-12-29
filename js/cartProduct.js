
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
