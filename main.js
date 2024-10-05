(function () {
  document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos todos los headers que controlan el menú
    const headers = document.querySelectorAll(".menu-header");

    headers.forEach(function (header) {
      header.addEventListener("click", function () {
        // Obtenemos el id del contenido que se quiere mostrar
        const targetId = this.getAttribute("data-target");

        // Verificamos si el ID no es null
        if (targetId) {
          const content = document.getElementById(targetId);

          // Si encontramos el contenido, alternamos entre mostrar y ocultar
          if (content) {
            if (content.style.display === "block") {
              content.style.display = "none";
              content.style.maxHeight = "0";
              content.style.opacity = "0";
            } else {
              content.style.display = "block";
              content.style.maxHeight = content.scrollHeight + "px";
              content.style.opacity = "1";
            }
          }
        }
      });
    });
  });
})();
