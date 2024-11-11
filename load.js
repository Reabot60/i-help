document.addEventListener("DOMContentLoaded", () => {
    const preview = document.getElementById("preview");
    const mainContent = document.getElementById("main-content");
  
    // Show the main content after the preview animation ends
    preview.addEventListener("animationend", () => {
      preview.style.display = "none"; // Hide the preview after the slide animation
      mainContent.style.display = "block"; // Reveal the main content
    });
  });
  