// Definição de lista tipo "Map" para facilitar o controle dos itens e suas quantidades:

let valorTotal = 0;
let carrinho = new Map();
resetarMap();

// Variáveis auxiliares:

let foneOK = false;
let celularOK = false;
let oculosOK = false;

let pFone = 100;
let pCelular = 1400;
let pOculos = 5000;

let tFone = 0;
let tCelular = 0;
let tOculos = 0;

// Função para adicionar itens ao carrinho:

function adicionar() {

    let produtoSelecionado = document.getElementById("produto");
    let quantidadeProduto = parseInt(document.getElementById("quantidade").value);

    // Adição do Fone:
    if (produtoSelecionado.value == "Fone de ouvido - R$100") {
        carrinho.set("Fone", carrinho.get("Fone") + parseInt(quantidadeProduto));
        valorTotal = valorTotal + 100 * quantidadeProduto;
        valorTotalCarrinho("valor-total", `R$${valorTotal}`);
        if (foneOK == true) {
            modificarItensCarrinho("p1", carrinho.get("Fone"), "Fone de Ouvido", tFone = tFone + pFone)
        } else {
            itensCarrinho("p1", carrinho.get("Fone"), "Fone de Ouvido", tFone = tFone + pFone);
            foneOK = true;
        }
    } else {
        // Adição do Celular:
        if (produtoSelecionado.value == "Celular - R$1400") {
            carrinho.set("Celular", carrinho.get("Celular") + parseInt(quantidadeProduto));
            valorTotal = valorTotal + 1400 * quantidadeProduto;
            valorTotalCarrinho("valor-total", `R$${valorTotal}`);
            if (celularOK == true) {
                modificarItensCarrinho("p2", carrinho.get("Celular"), "Celular", tCelular = tCelular + pCelular)
            } else {
                itensCarrinho("p2", carrinho.get("Celular"), "Celular", tCelular = tCelular + pCelular);
                celularOK = true;
            }
        } else {
            // Adição dos Óculos:
            if (produtoSelecionado.value == "Oculus VR - R$5000") {
                carrinho.set("Óculos", carrinho.get("Óculos") + parseInt(quantidadeProduto));
                valorTotal = valorTotal + 5000 * quantidadeProduto;
                valorTotalCarrinho("valor-total", `R$${valorTotal}`);
                if (oculosOK == true) {
                    modificarItensCarrinho("p3", carrinho.get("Óculos VR"), "Óculos", tOculos = tOculos + pOculos)
                } else {
                    itensCarrinho("p3", carrinho.get("Óculos"), "Óculos VR", tOculos = tOculos + pOculos);
                    oculosOK = true;
                }
            }
        }
    }
    console.log(carrinho);
    console.log(valorTotal);
}

// Função para limpar o carrinho:

function limpar() {
    resetarMap();
    // COMANDO PARA REMOVER TODOS OS ITENS ADICIONADOS AO CARRINHO
    valorTotalCarrinho("valor-total", "R$0");
    console.log(carrinho);
}

// Funções que manipulam, respectivamente, os produtos da lista e o valor total:

function itensCarrinho(id, qtd, nome, preco) {

    // Pegando o elemento onde os itens são colocados:
    let itens = document.getElementById("lista-produtos");

    // Adicionando o elemento "section" com sua classe estilizada:
    let produto = document.createElement("section");
    produto.classList.add("carrinho__produtos__produto");
    produto.id = id;

    // Adicionando o elemento "span" da quantidade:
    let span1 = document.createElement("span");
    span1.classList.add("texto-azul");
    span1.textContent = `${qtd}x`;

    // Adicionando o elemento "span" do preço:
    let span2 = document.createElement("span");
    span2.classList.add("texto-azul");
    span2.textContent = `R$${preco}.`;

    // Montando a linha do produto:
    produto.appendChild(span1);
    produto.append(" " + nome + " ");
    produto.appendChild(span2);

    // Adiciona a linha do produto como item no carrinho:
    itens.appendChild(produto);
}

function modificarItensCarrinho(id, novaQtd, novoNome, novoPreco) {
    let produto = document.getElementById(id);

    if (produto) {
        let spans = produto.querySelectorAll(".texto-azul");
        spans[0].textContent = `${novaQtd}x`;
        produto.childNodes[1].nodeValue = " " + novoNome + " ";
        spans[1].textContent = `R$${novoPreco}.`;
    }

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