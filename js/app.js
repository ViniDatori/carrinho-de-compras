// Definição de lista tipo "Map" para facilitar o controle dos itens e suas quantidades:

let carrinho = new Map();
carrinho.set("Fone", parseInt(0));
carrinho.set("Celular", parseInt(0));
carrinho.set("Óculos", parseInt(0));

// Função para adicionar itens ao carrinho:

function adicionar() {

    let produtoSelecionado = document.getElementById("produto");
    let quantidadeProduto = parseInt(document.getElementById("quantidade").value);

    if (produtoSelecionado.value == "Fone de ouvido - R$100") {
        carrinho.set("Fone", carrinho.get("Fone") + parseInt(quantidadeProduto));
    } else {
        if (produtoSelecionado.value == "Celular - R$1400") {
            carrinho.set("Celular", carrinho.get("Celular") + parseInt(quantidadeProduto));
        } else {
            if (produtoSelecionado.value == "Oculus VR - R$5000") {
                carrinho.set("Óculos", carrinho.get("Óculos") + parseInt(quantidadeProduto));
            }
        }
    }
    console.log(carrinho);
}


// Função para limpar o carrinho:

function limpar() {
    carrinho.clear();
    let produtos = document.getElementById("lista-produtos");
    produtos.innerHTML = "-";
    let valorTotal = document.getElementById("valor-total");
    valorTotal.innerHTML = "R$0";
    console.log(carrinho);
}