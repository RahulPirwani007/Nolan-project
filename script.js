function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");

  const content = document.querySelector(".content");

  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-250px";
    content.style.marginLeft = "0";
  } else {
    sidebar.style.left = "0px";

    content.style.marginLeft = "250px";
  }
}
window.addEventListener("scroll", function () {
  const page2 = document.querySelector(".page2");
  const p2Right = document.querySelector(".p2-right");
  const p2Left = document.querySelector(".p2-left");

  if (!page2 || !p2Right || !p2Left) {
    console.error("Elements not found!");
    return; // Exit if any element is not found
  }

  // Get the position of the page2 section relative to the viewport
  const page2Top = page2.getBoundingClientRect().top;
  const page2Bottom = page2.getBoundingClientRect().bottom;

  // Log the positions for debugging
  console.log("page2Top:", page2Top, "page2Bottom:", page2Bottom);

  // Check if page2 is in the viewport
  if (page2Top < window.innerHeight && page2Bottom > 0) {
    // Add 'show' class to trigger the animation
    p2Right.classList.add("show");
    p2Left.classList.add("show");
  } else {
    // Remove 'show' class when it's out of view
    p2Right.classList.remove("show");
    p2Left.classList.remove("show");
  }
});
// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Get the page2 and page3 elements
  const page2 = document.querySelector(".page2");
  const page3 = document.querySelector(".page3");

  // Get all the .cardWrapper elements inside .page3
  const cardWrappers = document.querySelectorAll(".cardWrapper");

  // Function to check when page 3 is visible
  function checkPageTransition() {
    const page3Position = page3.getBoundingClientRect();

    // Check if page 3 is in the viewport (meaning we are on page 3)
    if (page3Position.top <= window.innerHeight && page3Position.bottom >= 0) {
      // Add 'bottomTop' class to each .cardWrapper element in page 3
      cardWrappers.forEach((cardWrapper) => {
        cardWrapper.classList.add("bottomTop");
      });
    }
  }

  // Listen for scroll events and check for page transition
  window.addEventListener("scroll", checkPageTransition);

  // Initial check in case we are already on page 3
  checkPageTransition();
});
