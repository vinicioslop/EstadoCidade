const iniciar = (evt) => {
    evt.preventDefault();

    const estado = document.getElementById("estado");
    const estadoSelecionado = estado.options[estado.selectedIndex].value;

    if (!estadoSelecionado || estadoSelecionado.length === 2) {
        document.getElementById("cidade").disabled = false;
    }

    if (document.getElementById("resultados").classList.contains("esconde")) {
        document.getElementById("resultados").classList.remove("esconde");
    }
};

const selecionaCidade = (evt) => {
    evt.preventDefault();

    const estado = document.getElementById("estado").options[estado.selectedIndex].value;
    const cidade = document.getElementById("cidade").options[cidade.selectedIndex].value;

    document.getElementById("local").innerText = cidade + "/" + estado;
}

document.addEventListener("DOMContentLoaded", iniciar());
document.getElementById("cidade").addEventListener('change', selecionaCidade);