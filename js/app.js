let carrinho = [];

// Função para adicionar itens ao carrinho:

function adicionar() {

}


// Função para limpar o carrinho:

function limpar() {
    carrinho = [];
    let produtos = document.getElementById("lista-produtos");
    produtos.innerHTML = "-";
    let valorTotal = document.getElementById("valor-total");
    valorTotal.innerHTML = "R$0";
}