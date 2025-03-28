var Leonardo = window.document.getElementById("leonardo");
var Samantha = window.document.getElementById("samantha");
var bruna = window.document.getElementById("bruna");
var setaesquerda = window.document.getElementById("setaesquerda");
var setadireita = window.document.getElementById("setadireita");
function rolarparadireita()
{
    Leonardo.style.display = "none"
    bruna.style.display = "flex"
    setadireita.style.display = "none"
    setaesquerda.style ="display:flex; margin-top: 55px"
}

function rolarparaesquerda()
{
    bruna.style.display = "none"
    Leonardo.style.display = "flex"
    setaesquerda.style.display = "none"
    setadireita.style ="display:flex; margin-top: 55px"
}