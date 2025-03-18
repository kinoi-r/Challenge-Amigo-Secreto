const listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("Amigo");
    const nome = input.ariaValueMax.trim();
    const lista = document.getElementById("listaAmigos");

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

}