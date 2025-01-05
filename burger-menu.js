const burgerOpenButton = document.getElementById("burger-menu-icon");
const burgerCloseButton = document.getElementById("burger-close-icon");
const responsiveNavWrapper = document.querySelector(".responsive-nav-wrapper");

burgerOpenButton.addEventListener("click", () => {
  responsiveNavWrapper.style.transform = "translateX(0)";
});

burgerCloseButton.addEventListener("click", () => {
  responsiveNavWrapper.style.transform = "translateX(-100%)";
});
