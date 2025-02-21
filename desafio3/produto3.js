document.addEventListener('DOMContentLoaded', () => {
    const produtosContainer = document.getElementById('produtosContainer');
    const btnCards = document.getElementById('btnCards');
    const btnLista = document.getElementById('btnLista');

    fetch('produto.json')
        .then(response => response.json())
        .then(produtos => {
            btnCards.addEventListener('click', () => exibirProdutos(produtos, 'cards'));
            btnLista.addEventListener('click', () => exibirProdutos(produtos, 'lista'));
        });

    function exibirProdutos(produtos, modo) {
        produtosContainer.innerHTML = '';
        produtos.forEach(produto => {
            const produtoElement = document.createElement('div');
            produtoElement.classList.add('produto', modo);

            produtoElement.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h2>${produto.nome}</h2>
                <p>${produto.descricao}</p>
                <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            `;

            produtosContainer.appendChild(produtoElement);
        });
    }
});