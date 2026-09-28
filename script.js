/* =========================================
   SHOW MONTH SCREEN
========================================= */

function showMonth(monthNumber) {

    // Hide the homepage
    const homePage = document.getElementById("home");

    homePage.style.display = "none";


    // Get all month pages
    const monthPages = document.querySelectorAll(".month-page");


    // Hide every month page
    monthPages.forEach(function(page) {

        page.style.display = "none";

    });


    // Find the selected month
    const selectedMonth = document.getElementById(
        "month" + monthNumber
    );


    // Show the selected month
    if (selectedMonth) {

        selectedMonth.style.display = "block";

    }


    // Scroll to the top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   BACK TO HOME
========================================= */

function goHome() {

    // Get all month pages
    const monthPages = document.querySelectorAll(".month-page");


    // Hide every month page
    monthPages.forEach(function(page) {

        page.style.display = "none";

    });


    // Show the homepage
    const homePage = document.getElementById("home");

    homePage.style.display = "flex";


    // Scroll to the top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   START WITH HOMEPAGE
========================================= */

document.addEventListener("DOMContentLoaded", function() {

    // Hide all month screens when the website opens
    const monthPages = document.querySelectorAll(".month-page");

    monthPages.forEach(function(page) {

        page.style.display = "none";

    });


    // Make sure the homepage is visible
    const homePage = document.getElementById("home");

    homePage.style.display = "flex";

});

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");

function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicButton.textContent = "❚❚";
    } else {
        backgroundMusic.pause();
        musicButton.textContent = "▶";
    }
}