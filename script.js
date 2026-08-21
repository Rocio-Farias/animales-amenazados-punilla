const buscador = document.getElementById("search-input");
const botones = document.querySelectorAll("[data-animal]");

function filtroBusqueda() {
    const texto = buscador.value.toLowerCase();

    botones.forEach(function(boton) {
        const animal = boton.getAttribute("data-animal").toLowerCase();

        if (animal.includes(texto)) {
            boton.style.display = "inline-block";
        } else {
            boton.style.display = "none";
        }
    });
}

buscador.addEventListener("input", filtroBusqueda);