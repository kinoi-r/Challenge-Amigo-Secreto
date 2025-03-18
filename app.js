const listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("Amigo");
    const nome = input.ariaValueMax.trim();
    const lista = document.getElementById("listaAmigos");

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach(nome => {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    })
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista está vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = <li>Amigo sorteado: <strong>${sorteado}</strong></li>;
}
