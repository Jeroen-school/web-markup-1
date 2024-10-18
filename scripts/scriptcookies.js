document.addEventListener("DOMContentLoaded", function() {
    const cookiePopup = document.getElementById('cookiePopup');
    const acceptButton = document.getElementById('acceptCookies');

    acceptButton.addEventListener('click', function() {
        cookiePopup.classList.add('fade-out');
        setTimeout(() => {
            cookiePopup.style.display = 'none';
        }, 500); // Wait for the fade-out effect to complete (500ms)
    });
});
