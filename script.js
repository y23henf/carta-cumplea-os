document.addEventListener("DOMContentLoaded", function () {

    const abrir = document.getElementById("abrir");
    const portada = document.getElementById("portada");
    const contenido = document.getElementById("contenido");

    const sorpresaBtn = document.getElementById("sorpresaBtn");
    const videoSorpresa = document.getElementById("videoSorpresa");
    const video = document.getElementById("video");

    const confetiBtn = document.getElementById("confetiBtn");

    abrir.addEventListener("click", function () {
        portada.style.display = "none";
        contenido.classList.add("activo");
        crearConfeti(60);
    });

    sorpresaBtn.addEventListener("click", function () {
        videoSorpresa.classList.add("mostrar");
        sorpresaBtn.textContent = "🎉 ¡SORPRESA!";
        crearConfeti(100);
    });

    confetiBtn.addEventListener("click", function () {
        crearConfeti(100);
    });

    function crearConfeti(cantidad) {

        const colores = [
            "#e83232",
            "#1877b7",
            "#65b95c",
            "#f5c400",
            "#ff8c42"
        ];

        for (let i = 0; i < cantidad; i++) {

            const pieza = document.createElement("div");

            pieza.classList.add("confeti");

            pieza.style.left = Math.random() * 100 + "vw";

            pieza.style.backgroundColor =
                colores[Math.floor(Math.random() * colores.length)];

            pieza.style.animation =
                "caer " + (Math.random() * 3 + 2) + "s linear forwards";

            document.body.appendChild(pieza);

            setTimeout(function () {
                pieza.remove();
            }, 5500);
        }
    }

});