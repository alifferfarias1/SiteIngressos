document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'admin123') {
        window.location.href = 'admin.html';
    } else if (username === 'user' && password === 'user123') {
        window.location.href = 'index.html';  // Alterado para 'index.html' como discutido
    } else {
        alert('Usuário ou senha incorretos!');
    }
});
