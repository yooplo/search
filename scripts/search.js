document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const submitButton = document.getElementById('submit-button');
    const queryInput = document.getElementById('query');
    const microphoneIcon = document.querySelector('#icon-left'); // The microphone icon
    const googleIcon = document.querySelector('.fab.fa-google'); // The Google search icon
    const uploadIcon = document.getElementById('upload-icon'); // The upload icon for image search
    const imageInput = document.getElementById('textbox'); // The file input for image search

    // Monitor input fields to enable submit button for text search
    form.addEventListener('input', function () {
        if (queryInput.value.trim() !== "") {
            submitButton.disabled = false; // Enable submit button if there's input
        } else {
            submitButton.disabled = true; // Disable submit button if no input
        }
    });

    // Listen for Enter key press when form is ready for text search
    form.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !submitButton.disabled) {
            e.preventDefault();
            form.submit();
        }
    });

    // Voice search functionality (clicking the microphone icon)
    microphoneIcon.addEventListener('click', function () {
        startVoiceRecognition();
    });

    // Google icon click event for direct form submission (text search)
    googleIcon.addEventListener('click', function () {
        form.submit();
    });

    // Image search: Listen for change event on image input field (file selection)
    imageInput.addEventListener('change', function () {
        if (imageInput.files.length > 0) {
            submitButton.disabled = false; // Enable submit button if a file is selected
        } else {
            submitButton.disabled = true; // Disable submit button if no file is selected
        }
    });

    // Listen for click on the upload icon to submit the image search form
    uploadIcon.addEventListener('click', function () {
        if (imageInput.files.length > 0) {
            form.submit(); // Submit the form if an image file is selected
        } else {
            alert('Please select an image file before submitting.');
        }
    });

    // Speech Recognition Functionality
    function startVoiceRecognition() {
        // Check if the browser supports SpeechRecognition
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.lang = 'en-US'; // Set language for recognition
            recognition.continuous = false; // Stop after one result
            recognition.interimResults = false; // No need for interim results

            recognition.start(); // Start the speech recognition process

            recognition.onresult = function (event) {
                const transcript = event.results[0][0].transcript;
                queryInput.value = transcript; // Set the input field to the transcript

                // Trigger the search automatically once speech is recognized
                submitButton.disabled = false; // Enable the submit button
                form.submit(); // Submit the form with the recognized search query
            };

            recognition.onerror = function (event) {
                console.error('Speech recognition error:', event.error);
                alert('Error recognizing your speech. Please try again.');
            };
        } else {
            alert('Your browser does not support speech recognition.');
        }
    }
});
