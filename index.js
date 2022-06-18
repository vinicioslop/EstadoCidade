let estadoSelecionado = (evt) => {
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

let cidadeSelecionada = (evt) => {
    evt.preventDefault();

    const estado =
        document.getElementById("estado").options[estado.selectedIndex].value;
    const cidade =
        document.getElementById("cidade").options[cidade.selectedIndex].value;

    document.getElementById("local").innerText = cidade + "/" + estado;
};

document.getElementById("estado").addEventListener("change", estadoSelecionado);
document.getElementById("cidade").addEventListener("change", cidadeSelecionada);
