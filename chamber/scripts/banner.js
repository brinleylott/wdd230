// script.js
// Update this in script.js
// Update this in script.js
document.addEventListener('DOMContentLoaded', function() {
    // Function to check the day and update banner visibility
    function updateBannerVisibility() {
        var currentDay = new Date().getDay();
        var allowedDays = [1, 2, 3];
        var bannerContainer = document.getElementById('banner-container');

        if (allowedDays.includes(currentDay)) {
            // Display the banner
            bannerContainer.style.display = 'block';
        } else {
            // Hide the banner
            bannerContainer.style.display = 'none';
        }
    }

    // Call the function to initially set banner visibility
    updateBannerVisibility();

});



function closeBanner() {
    document.getElementById('banner-container').style.display = 'none';
}