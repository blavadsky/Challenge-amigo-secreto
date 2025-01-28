const friends = [];

function addFriend() {
    const inputFriend = document.getElementById('amigo');
    const name = inputFriend.value.trim();

    if (name === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (friends.includes(name)) {
        alert("El amigo ya está en la lista.");
        return;
    }

    friends.push(name);
    inputFriend.value = "";
    updateList();
}

function updateList() {
    const friendsList = document.getElementById('listaAmigos');
    return friendsList.innerHTML = friends
        .map(name => `<li class="friend-item">${name}</li>`)
        .join("");
}

function raffleFriend() {
    if (friends.length === 0) {
        alert("No hay amigos disponibles para el sorteo. Por favor, añade nombres a la lista.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * friends.length);
    const raffledFriend = friends[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p class="sorteo-result">¡El amigo sorteado es: <strong>${raffledFriend}</strong>!</p>`;
}
