var users = [];

function addUser() {
    var emailInput = document.getElementById('EmailInput');
    var mensajeInput = document.getElementById('MensajeInput');
    var userTable = document.getElementById('userTable');

    var email = emailInput.value;
    var mensaje = mensajeInput.value;

    if (email.trim() !== '' && mensaje.trim() !== '') {
        var user = {
            email: email,
            mensaje: mensaje
        };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Usuario agregado correctamente.');

        emailInput.value = '';
        mensajeInput.value = '';

        loadUsers();
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function loadUsers() {
    // Implementa la función loadUsers según tus necesidades
}

window.onload = loadUsers;
