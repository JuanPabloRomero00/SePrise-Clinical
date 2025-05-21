document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    // Mostrar u ocultar el menú al hacer clic en el botón
    menuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("show");
    });

    // Cerrar el menú al hacer clic en un enlace
    const navLinks = mainNav.querySelectorAll("a");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("show");
      });
    });
  }
});