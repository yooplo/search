document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('image-search-form');
    const submitButton = document.getElementById('image-submit-button');
    const imageInput = document.getElementById('image-input');
    const searchByImage = document.getElementById('search-by-image');

    // Trigger the file input when the SVG icon is clicked
    searchByImage.addEventListener('click', function () {
        imageInput.click(); // Simulate a click on the file input when the icon is clicked
    });

    // Listen for file input change (image selection)
    imageInput.addEventListener('change', function () {
        // Optionally, you can add a message or change button style here based on whether the image is selected
        if (imageInput.files.length > 0) {
            submitButton.style.boxShadow = "0px 0px 25px #ffe81f"; // Glowing effect
            submitButton.disabled = false; // Enable the submit button when an image is selected
        } else {
            submitButton.disabled = true; // Disable the submit button if no file is selected
        }
    });

    // Prevent form submission if no image is selected
    form.addEventListener('submit', function (event) {
        if (imageInput.files.length === 0) {
            event.preventDefault(); // Prevent form submission if no image is selected
            alert('Please select an image to upload.');
        }
    });
});
