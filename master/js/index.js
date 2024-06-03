document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const eventName = button.getAttribute('data-event');
            window.location.href = `compra.html?event=${encodeURIComponent(eventName)}`;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.getElementById('login-link');
    const logoutLink = document.getElementById('logout-link');

    function checkLoginStatus() {
        const loggedIn = sessionStorage.getItem('loggedIn') === 'true';
        if (loggedIn) {
            loginLink.style.display = 'none';
            logoutLink.style.display = 'inline';
        } else {
            loginLink.style.display = 'inline';
            logoutLink.style.display = 'none';
        }
    }

    logoutLink.addEventListener('click', () => {
        sessionStorage.setItem('loggedIn', 'false');
        checkLoginStatus();
    });

    checkLoginStatus();
});

document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.getElementById('login-link');
    const logoutLink = document.getElementById('logout-link');

    function checkLoginStatus() {
        const loggedIn = sessionStorage.getItem('loggedIn') === 'true';
        if (loggedIn) {
            loginLink.style.display = 'none';
            logoutLink.style.display = 'inline';
        } else {
            loginLink.style.display = 'inline';
            logoutLink.style.display = 'none';
        }
    }

    logoutLink.addEventListener('click', () => {
        sessionStorage.setItem('loggedIn', 'false');
        checkLoginStatus();
    });

    checkLoginStatus();
});
