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
    const historicoLink = document.getElementById('historico-link');
    const adminLink = document.getElementById('admin-link');

    function checkLoginStatus() {
        const loggedIn = sessionStorage.getItem('loggedIn') === 'true';
        const userType = sessionStorage.getItem('userType');

        if (loggedIn) {
            loginLink.style.display = 'none';
            logoutLink.style.display = 'inline';
            if (userType === 'user') {
                historicoLink.style.display = 'inline';
                adminLink.style.display = 'none';
            } else if (userType === 'admin') {
                adminLink.style.display = 'inline';
                historicoLink.style.display = 'none';
            }
        } else {
            loginLink.style.display = 'inline';
            logoutLink.style.display = 'none';
            historicoLink.style.display = 'none';
            adminLink.style.display = 'none';
        }
    }

    logoutLink.addEventListener('click', () => {
        sessionStorage.setItem('loggedIn', 'false');
        sessionStorage.setItem('userType', '');
        checkLoginStatus();
    });

    checkLoginStatus();
});
