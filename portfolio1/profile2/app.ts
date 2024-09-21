// Grab the DOM elements
const nameInput = document.getElementById("name") as HTMLInputElement;
const aboutInput = document.getElementById("about") as HTMLTextAreaElement;
const projectsInput = document.getElementById("projects") as HTMLTextAreaElement;
const themeSelect = document.getElementById("theme") as HTMLSelectElement;

const previewName = document.getElementById("preview-name") as HTMLElement;
const previewAbout = document.getElementById("preview-about") as HTMLElement;
const previewProjects = document.getElementById("preview-projects") as HTMLElement;
const portfolioPreview = document.querySelector(".portfolio-preview") as HTMLElement;

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
