let divIncioSesion = document.querySelector('#container-inicio-sesion');

let contenidoHTML = `
    <div class="left-column">
        <img src="../img/img-iniciosesion.jpg" alt="Imagen de inicio de sesión" class="img-is">
    </div>
    <div class="right-column">
        <h2>Inicia Sesión</h2>
        <form id="login-form">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Ingresa tu email" required>

            <label for="password">Contraseña</label>
            <div class="password-container">
                <input type="password" id="password" placeholder="Ingresa tu contraseña" required>
            </div>

            <button type="submit" class="btn-login">Ingresar</button>

            <div class="links">
                <a href="#">¿Olvidaste tu email?</a>
                <a href="#">¿Olvidaste tu contraseña?</a>
            </div>

            <p class="register">¿No tenés cuenta? <a href="#">Créala ahora</a></p>
        </form>
        <p id="error-msg" style="color: red; display: none; margin-top: 10px;">Email o contraseña incorrectos.</p>
    </div>
`;

divIncioSesion.innerHTML = contenidoHTML;

// Lógica del login
document.querySelector('#login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir envío del formulario

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    const adminEmail = 'admin@admin.com';
    const adminPassword = 'admin123';

    if (email === "admin@admin.com" && password === "admin1234") {
        window.location.href = 'admin.html'; // Redirigir si es correcto
    } else {
         alert('Credenciales incorrectas. Serás redirigido al inicio.');
         window.location.href = '../index.html'; // Mostrar error
         
    }
});
