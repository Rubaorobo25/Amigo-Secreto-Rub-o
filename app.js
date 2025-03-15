//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("nameInput");
    const addButton = document.getElementById("addButton");
    const drawButton = document.getElementById("drawButton");
    const nameList = document.getElementById("nameList");
    const resultList = document.getElementById("resultList");

    let participants = [];

    // Adicionar nome à lista
    addButton.addEventListener("click", () => {
        const name = nameInput.value.trim();
        if (name && !participants.includes(name)) {
            participants.push(name);
            updateNameList();
            nameInput.value = "";
        } else {
            alert("Digite um nome válido e que ainda não tenha sido adicionado.");
        }
    });

    // Atualizar lista de participantes na tela
    function updateNameList() {
        nameList.innerHTML = "";
        participants.forEach(name => {
            const li = document.createElement("li");
            li.textContent = name;
            nameList.appendChild(li);
        });
    }

    // Sortear um único nome e removê-lo da lista
    drawButton.addEventListener("click", () => {
        if (participants.length === 0) {
            alert("Todos os nomes já foram sorteados! Adicione mais para continuar.");
            return;
        }

        const randomIndex = Math.floor(Math.random() * participants.length);
        const selectedName = participants[randomIndex];

        // Remover o nome sorteado da lista
        participants.splice(randomIndex, 1);
        updateNameList();

        // Exibir o resultado
        resultList.innerHTML += `<li>🏆 Sorteado: <strong>${selectedName}</strong> 🎉</li>`;
    });
});