const today = new Date();
let year = today.getFullYear();
let lastModified = document.lastModified;
let lastModifiedElement = document.querySelector('#last-modified')

if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modied ${lastModified}`;
}