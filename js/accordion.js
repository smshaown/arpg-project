document.addEventListener('alpine:init', () => {
    Alpine.store('accordion', {
      tab: 0
    });
    
    Alpine.data('accordion', (idx) => ({
      init() {
        this.idx = idx;
      },
      idx: -1,
      handleClick() {
        this.$store.accordion.tab = this.$store.accordion.tab === this.idx ? 0 : this.idx;
      },
      handleRotate() {
        return this.$store.accordion.tab === this.idx ? 'rotate-180' : '';
      },
      handleToggle() {
        return this.$store.accordion.tab === this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : '';
      }
    }));
  })

  const openSidebarBtn = document.getElementById("openSidebarBtn");
  const closeSidebarBtn = document.getElementById("closeSidebarBtn");
  const rightSidebar = document.getElementById("rightSidebar");

  openSidebarBtn.addEventListener("click", function () {
    rightSidebar.classList.remove("hidden");
    rightSidebar.classList.remove("translate-x-full");
  });

  closeSidebarBtn.addEventListener("click", function () {
    rightSidebar.classList.add("translate-x-full");
    // You might want to add a delay to allow the sidebar to slide out before hiding it
    setTimeout(() => {
      rightSidebar.classList.add("hidden");
    }, 300); // Adjust the delay to match the transition duration
  });


  