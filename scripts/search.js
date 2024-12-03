document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const submitButton = document.getElementById('submit-button');
    
    // Monitor input fields to enable submit button
    form.addEventListener('input', function () {
        // Check if the essential search field is filled
        const queryInput = document.getElementById('query');
        if (queryInput.value.trim() !== "") {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    });

    // Listen for Enter key press when form is ready
    form.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !submitButton.disabled) {
            e.preventDefault();
            form.submit();
        }
    });
});
