document.addEventListener("DOMContentLoaded", function () {
    function initializeButtons(containerId) {
      const container = document.getElementById(containerId);
      const buttons = container.querySelectorAll(".tab-button");
      const buttonContents = container.querySelectorAll(".button-content");

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          buttons.forEach((b) => {
            b.classList.remove("active");
          });

          button.classList.add("active");

          buttonContents.forEach((content) => content.classList.add("hidden"));
          container
            .querySelector(`#button-content${button.id.slice(-1)}`)
            .classList.remove("hidden");
        });
      });
    }

    initializeButtons("button-container");
  });