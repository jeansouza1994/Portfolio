// Código da parte de projetos

//Código do projeto 1
function codbtn() {
    const bt = document.querySelectorAll(".botao");
    const projetoAnimais = document.querySelector(".projeto-animais");

    if (bt && projetoAnimais) {
        bt.forEach(function (item) {
            item.addEventListener("mouseover", function () {
                projetoAnimais.classList.add("transparente");
            });

            item.addEventListener("mouseout", function () {
                projetoAnimais.classList.remove("transparente");
            });
        });
    }
}
codbtn();

//Código do projeto 2
function codbtn2() {
    const bt2 = document.querySelectorAll(".botao2");
    const projetoMindFit = document.querySelector(".projeto-mindfit");

    if (bt2 && projetoMindFit) {
        bt2.forEach(function (item) {
            item.addEventListener("mouseover", function () {
                projetoMindFit.classList.add("transparente");
            });

            item.addEventListener("mouseout", function () {
                projetoMindFit.classList.remove("transparente");
            });
        });
    }
}
codbtn2();

//Código do projeto 3
function codbtn3() {
    const bt3 = document.querySelectorAll(".botao3");
    const projetoBikcraft = document.querySelector(".projeto-bikcraft");

    if (bt3 && projetoBikcraft) {
        bt3.forEach(function (item) {
            item.addEventListener("mouseover", function () {
                projetoBikcraft.classList.add("transparente");
            });

            item.addEventListener("mouseout", function () {
                projetoBikcraft.classList.remove("transparente");
            });
        });
    }
}

codbtn3();

//Código do projeto 4
function codbtn4() {
    const bt4 = document.querySelectorAll(".botao4");
    const projetoFormulario = document.querySelector(".projeto-formulario");

    if (bt4 && projetoFormulario) {
        bt4.forEach(function (item) {
            item.addEventListener("mouseover", function () {
                projetoFormulario.classList.add("transparente");
            });

            item.addEventListener("mouseout", function () {
                projetoFormulario.classList.remove("transparente");
            });
        });
    }
}
codbtn4();

//Código do scrollsuave

function ScrollSuave() {
    const linksInternos = document.querySelectorAll('.menu a[href^="#"]');

    if (linksInternos) {
        function scrollToSection(event) {
            event.preventDefault();
            const href = event.currentTarget.getAttribute("href");
            const section = document.querySelector(href);

            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        linksInternos.forEach((link) => {
            link.addEventListener("click", scrollToSection);
        });
    }
}
ScrollSuave();
