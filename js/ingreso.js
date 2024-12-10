/* #### INGRESO #### */

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = event.target.email.value;
            const password = event.target.password.value;

            if (!email || !password) {
                alert('Por favor, completa todos los campos.');
                return;
            }

            const user = getUser(email);
            if (!user) {
                alert('No tienes una cuenta registrada. Por favor, regístrate.');
                return;
            }

            if (user.password !== password) {
                alert('Contraseña incorrecta.');
                return;
            }

            alert('Inicio de sesión exitoso.');
            window.location.href = 'inicio.html'; // Redirige a la página principal
        });
    }
});

function getUser(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.email === email);
}