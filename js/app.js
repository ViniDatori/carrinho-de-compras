// Definição de lista tipo "Map" para facilitar o controle dos itens e suas quantidades:

let valorTotal = 0;
let carrinho = new Map();
resetarMap();

// Função para adicionar itens ao carrinho:

function adicionar() {

    let produtoSelecionado = document.getElementById("produto");
    let quantidadeProduto = parseInt(document.getElementById("quantidade").value);

    if (produtoSelecionado.value == "Fone de ouvido - R$100") {
        valorTotal = valorTotal + 100;
        carrinho.set("Fone", carrinho.get("Fone") + parseInt(quantidadeProduto));
        valorTotalCarrinho("valor-total", `R$${valorTotal}`);
    } else {
        if (produtoSelecionado.value == "Celular - R$1400") {
            valorTotal = valorTotal + 1400;
            carrinho.set("Celular", carrinho.get("Celular") + parseInt(quantidadeProduto));
            valorTotalCarrinho("valor-total", `R$${valorTotal}`);
        } else {
            if (produtoSelecionado.value == "Oculus VR - R$5000") {
                valorTotal = valorTotal + 5000;
                carrinho.set("Óculos", carrinho.get("Óculos") + parseInt(quantidadeProduto));
                valorTotalCarrinho("valor-total", `R$${valorTotal}`);
            }
        }
    }
    console.log(carrinho);
    console.log(valorTotal);
}

// Função para limpar o carrinho:

function limpar() {
    resetarMap();
    itensCarrinho("lista-produtos","-");
    valorTotalCarrinho("valor-total","R$0");
    console.log(carrinho);
}

// Funções que manipulam, respectivamente, os produtos da lista e o valor total:

function itensCarrinho(id1, texto1) {
    let produtos = document.getElementById(id1);
    produtos.innerHTML = texto1;

}

function valorTotalCarrinho(id2, texto2) {
    let valorTotal = document.getElementById(id2);
    valorTotal.innerHTML = texto2;
}

// Função que reseta a Map:

function resetarMap() {
    carrinho.set("Fone", parseInt(0));
    carrinho.set("Celular", parseInt(0));
    carrinho.set("Óculos", parseInt(0));
}