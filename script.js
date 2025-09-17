function setupDropdown(selector = ".dropdown") {
  const dropdowns = document.querySelectorAll(selector);

  dropdowns.forEach((dropdown) => {
    const dropdownBtn = dropdown.querySelector(".dropdown-btn");
    const menuItems = dropdown.querySelector(".menu-items");

    if (dropdownBtn && menuItems) {
      dropdownBtn.addEventListener("click", () => {
        console.log("dropdown btn clicked");
        menuItems.classList.toggle("hidden");
      });
    }
  });
}

setupDropdown();
