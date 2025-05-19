let divIncioSesion = document.querySelector('#container-inicio-sesion')

let contenidoHTML = `
    <div class="left-column">
            <img src="../img/img-iniciosesion.jpg" alt="Imagen de inicio de sesión" class="img-is">
        </div>
        <div class="right-column">
            <h2>Inicia Sesión</h2>
            <form action="">
                <label for="">Email</label>
                <input type="email" name="" id="" placeholder="Ingresa tu email" required>

                <label for="">Contraseña</label>
                <div class="password-container">
                    <input type="password" name="" id="" placeholder="Ingresa tu contraseña" required>
                </div>

                <button type="submit" class="btn-login">Ingresar</button>

                <div class="links">
                    <a href="#">¿Olvidaste tu email?</a>
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </div>

                <p class="register">¿No tenés cuenta? <a href="#">Créala ahora</a></p>
            </form>
        </div>
`
divIncioSesion.innerHTML = contenidoHTML