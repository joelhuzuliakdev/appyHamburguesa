/* -------- FUNCION DE REGISTRO ----------- */

/* #### REGISTRO #### */

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = event.target.email.value;
            const password = event.target.password.value;

            if (!email || !password) {
                alert('Por favor, completa todos los campos.');
                return;
            }

            const existingUser = getUser(email);
            if (existingUser) {
                alert('El usuario ya está registrado. Por favor, inicia sesión.');
                return;
            }

            saveUser(email, password);
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            window.location.href = 'ingresar.html'; // Redirige a la página de ingreso
        });
    }
});

function saveUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
}

function getUser(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.email === email);
}