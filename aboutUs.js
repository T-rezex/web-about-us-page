// Get the element with ID "scroll"
var scrollElement = document.getElementById("scroll");

// Add a scroll event listener to the window
window.addEventListener("scroll", function() {
    // Calculate the scroll position
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Update the element's style based on the scroll position
    if (scrollPosition > 50) {
        scrollElement.style.height = "50px";
        // Add other style modifications as needed
    } else {
        scrollElement.style.height = "100px";
        // Add other style modifications as needed
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded

    // Add an event listener to the form with id "complaintForm"
    var complaintForm = document.getElementById("complaintForm");
    if (complaintForm) {
        complaintForm.addEventListener("submit", function(event) {
            // Prevent the default form submission
            event.preventDefault();

            // Show an alert
            showAlert();
        });
    }

    // Function to show an alert
    function showAlert() {
        alert("Your complaint was submitted successfully!");
    }
});
