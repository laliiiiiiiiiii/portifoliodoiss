// 1. Seleciona o elemento que queremos virar (o .card-inner)
const cardContainer = document.querySelector('.card-container');
const cardInner = document.querySelector('.card-inner');

// 2. Adiciona um "ouvinte de evento" (event listener) de clique no container
cardContainer.addEventListener('click', function() {
    // 3. Quando o clique ocorrer, alterna a classe 'is-flipped' no card-inner
    //    Se a classe existir, ela é removida (o card volta).
    //    Se a classe não existir, ela é adicionada (o card vira).
    cardInner.classList.toggle('is-flipped');
});

console.log("Script carregado! Clique no cartão para virar.");
