
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;

      document.querySelectorAll('.accordion-item').forEach(i => {
        if (i !== item) i.classList.remove('active');
      });

     
      item.classList.toggle('active');
    });
  });


  const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  menuToggle.textContent = mobileMenu.classList.contains("show") ? "✖" : "☰";
});








// Only handle submenu toggle on mobile using + icon
const submenuItems = document.querySelectorAll(".has-submenu");

submenuItems.forEach((item) => {
  const toggleIcon = item.querySelector(".toggle-icon");

  if (toggleIcon) {
    toggleIcon.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Close all other submenu items
      submenuItems.forEach((i) => {
        if (i !== item) {
          i.classList.remove("active");
          const icon = i.querySelector(".toggle-icon");
          if (icon) icon.textContent = "+"; // Reset icon to +
        }
      });

      // Toggle current one
      const isActive = item.classList.contains("active");
      item.classList.toggle("active");

      // Update icon of the clicked item
      toggleIcon.textContent = !isActive ? "−" : "+";
    });
  }
});





// const submenuItems = document.querySelectorAll(".has-submenu");

// submenuItems.forEach((item) => {
//   const toggleIcon = item.querySelector(".toggle-icon");

//   item.addEventListener("click", (e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     // Close all other submenu items
//     submenuItems.forEach((i) => {
//       if (i !== item) {
//         i.classList.remove("active");
//         const icon = i.querySelector(".toggle-icon");
//         if (icon) icon.textContent = "+"; // Reset icon
//       }
//     });

//     // Toggle current item
//     const isActive = item.classList.contains("active");
//     item.classList.toggle("active");

//     // Update icon
//     if (toggleIcon) {
//       toggleIcon.textContent = !isActive ? "−" : "+";
//     }
//   });
// });

