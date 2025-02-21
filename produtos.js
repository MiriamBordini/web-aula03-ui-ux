document.addEventListener('DOMContentLoaded', () => {
    const produtos = [
        {
            "id": 1,
            "nome": "Camiseta",
            "preco": 20.0
        },
        {
            "id": 2,
            "nome": "Calça",
            "preco": 50.0
        },
        {
            "id": 3,
            "nome": "Camiseta",
            "preco": 25.0
        },
        {
            "id": 4,
            "nome": "Calça",
            "preco": 55.0
        },
        {
            "id": 5,
            "nome": "Tênis",
            "preco": 150.0
        },
        {
            "id": 6,
            "nome": "Boné",
            "preco": 30.0
        },
        {
            "id": 7,
            "nome": "Mochila",
            "preco": 100.0
        },
        {
            "id": 8,
            "nome": "Relógio",
            "preco": 80.0
        }
    ];

    const lista = document.getElementById('produtos-lista');

    produtos.forEach(produto => {
        const item = document.createElement('li');
        item.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
        lista.appendChild(item);
    });
});