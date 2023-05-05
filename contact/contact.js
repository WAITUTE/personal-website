var contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the form data
    var formData = new FormData(contactForm);

    // Send the form data to the server
    fetch(contactForm.getAttribute("action"), {
        method: "POST",
        body: formData
    }).then(function(response) {
        // Display a success message
        alert("Your message was sent successfully!");

        // Clear the form inputs
        contactForm.reset();
    }).catch(function(error) {
        // Display an error message
        alert("There was an error sending your message. Please try again later.");
    });
});
