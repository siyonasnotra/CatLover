document.addEventListener('DOMContentLoaded', () => {
    const signUpModal = document.getElementById('signup-modal');
    const successModal = document.getElementById('success-modal');
    const openSignUpModal = document.getElementById('open-signup-modal');
    const closeSignUpModal = document.getElementById('close-signup-modal');
    const closeModal = document.querySelector('.close');
    const form = document.getElementById('sign-up-form');
    const formErrors = document.getElementById('form-errors');

    // Open Sign-Up Modal
    openSignUpModal.addEventListener('click', () => {
        signUpModal.classList.add('show');
    });

    closeSignUpModal.addEventListener('click', () => {
        signUpModal.classList.remove('show');
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === signUpModal || event.target === successModal) {
            signUpModal.classList.remove('show');
            successModal.classList.remove('show');
        }
    });

    // Form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Clear previous errors
        formErrors.textContent = '';

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validate form
        let errors = [];
        if (!name.match(/^[A-Za-z\s]{3,}$/)) {
            errors.push('Name must be at least 3 letters long.');
        }
        if (!email) {
            errors.push('Email is required.');
        }
        if (password.length < 6) {
            errors.push('Password must be at least 6 characters long.');
        }
        if (password !== confirmPassword) {
            errors.push('Passwords do not match.');
        }

        // If there are errors, display them
        if (errors.length > 0) {
            formErrors.innerHTML = errors.join('<br>');
            return;
        }

        // If no errors, show success modal and close sign-up modal
        signUpModal.classList.remove('show');
        successModal.classList.add('show');

        // Clear form fields
        form.reset();
    });

    closeModal.addEventListener('click', () => {
        successModal.classList.remove('show');
    });
});
