document.addEventListener('DOMContentLoaded', () => {
    fetch('produtos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(produtos => {
            const container = document.getElementById('produtos-container');
            produtos.forEach(produto => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    <h2>${produto.nome}</h2>
                    <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao carregar os produtos:', error));
});