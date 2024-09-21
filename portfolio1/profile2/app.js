"use strict";
// Grab the DOM elements
const nameInput = document.getElementById("name");
const aboutInput = document.getElementById("about");
const projectsInput = document.getElementById("projects");
const themeSelect = document.getElementById("theme");
const previewName = document.getElementById("preview-name");
const previewAbout = document.getElementById("preview-about");
const previewProjects = document.getElementById("preview-projects");
const portfolioPreview = document.querySelector(".portfolio-preview");
// Update the "Name" in live preview
nameInput.addEventListener("input", () => {
    previewName.textContent = nameInput.value || "Your Name";
});
// Update the "About Me" in live preview
aboutInput.addEventListener("input", () => {
    previewAbout.textContent = aboutInput.value || "About Me section...";
});
// Update the "Projects" in live preview
projectsInput.addEventListener("input", () => {
    previewProjects.textContent = projectsInput.value || "Projects will be shown here...";
});
// Handle theme switching
themeSelect.addEventListener("change", () => {
    portfolioPreview.className = `portfolio-preview ${themeSelect.value}`;
});
