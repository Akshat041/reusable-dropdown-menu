function setupDropdown() {
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const menuItems = document.querySelector(".menu-items");

  dropdownBtn.addEventListener("click", () => {
    console.log("dropdown btn clicked");

    menuItems.classList.toggle("hidden");
  });
}

setupDropdown();
