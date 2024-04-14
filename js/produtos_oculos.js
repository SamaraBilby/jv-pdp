const produtos = [
    {
        id: 1,
        code:77239,
        title: "Óculos de Sol Carmim CRM42289 142 C4",
        color: "Fumê Degradê com Proteção contra raios UVA/UVB",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"C4",
        old_price:313.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-carmim-crm42289-142-c4.jpg',
        description: ""
    },

    {
        id: 2,
        code:77244,
        title: "Óculos de Sol Carmim CRM42483 C5",
        color: "Fumê Degradê com Proteção contra raios UVA/UVB",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"C5",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-carmim-crm42483-c5.jpg',
        description: ""
    },
    {
        id: 3,
        code:79850,
        title: "Óculos de Sol Constantim TS6081-C1",
        color: "Degradê Fumê",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"C1",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-constantim-ts6081c1.jpg',
        description: ""
    },
    {
        id: 5,
        code:79926,
        title: "Óculos de Sol Constantim TS6081-C2",
        color: "Espelhadas",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"C2",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-constantim-ts6081c2.jpg',
        description: ""
    },
    {
        id: 6,
        code:79925,
        title: "Óculos de Sol Constantim TS6081-C3",
        color: "Degradê Marrom",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"C3",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-constantim-ts6081c3.jpg',
        description: ""
    },
    {
        id: 7,
        code:79932,
        title: "Óculos de Sol Constantim TS7007-C1",
        color: "Degradê Fumê",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"C1",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-constantim-ts7007c1.jpg',
        description: ""
    },
    {
        id: 8,
        code:79934,
        title: "Óculos de Sol Constantim TS7007-C2",
        color: "Espelhadas Amarelas",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"C2",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-constantim-ts7007c2.jpg',
        description: ""
    },
    {
        id: 9,
        code:79933,
        title: "Óculos de Sol Constantim TS7007-C3",
        color: "Espelhdas",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"C3",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-constantim-ts7007c3.jpg',
        description: ""
    },
    {
        id: 10,
        code:79938,
        title: "Óculos de Sol Constantim TS7008-C1",
        color: "Espelhadas",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model: "C1",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-constantim-ts7008c1.jpg',
        description: ""
    },
    {
        id: 11,
        code: 79935,
        title: "Óculos de Sol Constantim TS7008-C2",
        color: "Espelhadas Azuis",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model: "C2",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-constantim-ts7008c2.jpg',
        description: ""
    },
    {
        id: 12,
        code:79937,
        title: "Óculos de Sol Constantim TS7008-C3",
        color: "Marrom",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"C3",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-constantim-ts7008c3.jpg',
        description: ""
    },
    {
        id: 13,
        code:79936,
        title: "Óculos de Sol Constantim TS7008-C4",
        color:"Espelhadas Laranjas",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"C4",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-constantim-ts7008c4.jpg',
        description: ""
    },
    {
        id: 14,
        code:79929,
        title: "Óculos de Sol Constantim TS7010-C1",
        color:"Furta Cor Espelhadas",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"C1",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-constantim-ts7010c1.jpg',
        description: ""
    },
    {
        id: 15,
        code:79927,
        title: "Óculos de Sol Constantim TS7010-C2",
        color:"Azuis Espelhadas",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"C2",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-constantim-ts7010c2.jpg',
        description: ""
    },
    {
        id: 16,
        code:79930,
        title: "Óculos de Sol Constantim TS7010-C3",
        color:"Fumê Degradê",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"C3",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-constantim-ts7010c3.jpg',
        description: ""
    },
    {
        id: 18,
        code: 79931,
        title: "Óculos de Sol Constantim TS7010-C4",
        color:"Azul Espelhada",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"C4",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-constantim-ts7010c4.jpg',
        description: ""
    },
    {
        id: 19,
        code:85981,
        title: "Óculos de Sol Phillip Kollin 2609 C3",
        color:"UV400 Marrom Degradê",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"C3",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-phillip-kollin-2609-c3.jpg',
        description: ""
    },
    {
        id: 20,
        code: 86007,
        title: "Óculos de Sol Phillip Kollin 8098 C2",
        color:"UV400 Roxa",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"C2",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-phillip-kollin-8098-c2.jpg',
        description: ""
    },
    {
        id: 21,
        code:86003,
        title: "Óculos de Sol Phillip Kollin 8098 C5",
        color:"UV400 Marrom",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"C5",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-phillip-kollin-8098-c5.jpg',
        description: ""
    },
    {
        id: 22,
        code: 78851,
        title: "Óculos de Sol Phillip Kollin C3285 C3",
        color: "Degradê Fumê",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"C3",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-phillip-kollin-c3285-c3.jpg',
        description: ""
    },
    {
        id: 23,
        code: 78862,
        title: "Óculos de Sol Phillip Kollin PZ8842 C5",
        color: "Degrade Marrom",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"C5",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-phillip-kollin-pz8842-c5.jpg',
        description: ""
    },
    {
        id: 24,
        code:76715,
        title: "Óculos de Sol Phillip Kollin RHSO-H202-C04",
        color: "Marrom Degradê",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"RHSO-H202",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-phillip-kollin-rhsoh202c04.jpg',
        description: ""
    },
    {
        id: 25,
        code:76716,
        title: "Óculos de Sol Phillip Kollin RHSO-H214-C03",
        color: "Marrom",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"RHSO-H214",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-phillip-kollin-rhsoh214c03.jpg',
        description: ""
    },
    {
        id: 26,
        code:76959,
        title: "Óculos de Sol Victor Hugo SH1742 0Z10",
        color: "Marrom Degradê",
        category: "Acessórios",
        subcategory: "Óculos de Sol",
        model:"SH1742",
        old_price:1188.00,
        price: 29.00,
        img: './img/product/oculos/oculos-de-sol-victor-hugo-sh1742-0z10.jpg',
        description: ""
    }
];

const produtosContainer = document.querySelector('#produtosContainer');
const quantidadesProdutos = document.querySelector(".quantidadesProdutos");
const buscaInput = document.querySelector(".pesquisaInput");



function procurandoInput(event) {
    const encontrandoInput = event.target.value;

    const produtosEncontrados = productsFilterInSearch(encontrandoInput);

    produtosEncontrados .length > 0
        ? ListaEQuantidadesProdutos(produtosEncontrados)
        : (produtosContainer.innerHTML ='Nenhum produto encontrado');
}

function productsFilterInSearch(encontrandoInput) {
    return produtos.filter((produtos) => {
        return produtos.categoria.toLowerCase().includes(encontrandoInput.toLowerCase());
    });

}

buscaInput.addEventListener('keyup', _.debounce(procurandoInput, 400));

/* Função para colocar valores em moeda brasileira */

const formatter = Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits:2,
})

function buscaInvalida(index) {

    produtos.splice(index, 1);

    if (buscaInput.value !== '') {
        const productFiltered = productsFilterInSearch(buscaInput.value);
        renderListAndHeader(productFiltered);
        if (productFiltered.length == 0) {
            buscaInput.value = '';
        }
        return;
    }
    ListaEQuantidadesProdutos(produtos);
}


/* função para mostrar a quantidade de produtos que aparecem na tela*/

function QuantidadesProdutos(produtos) {
    const totalProdutos = produtos.length;

    quantidadesProdutos.innerHTML = totalProdutos > 0 ? `${totalProdutos} produtos disponíveis` : ('0 produtos disponíveis');
}

function ListaEQuantidadesProdutos(produtos) {
    render(produtos);
    QuantidadesProdutos(produtos);
}


/* Função para mostrar os produtos na tela */



function render(produtos){
    let lista = "";

    if(produtos.length <= 0){
       
        lista = `<div class = "nao-encontrado">Ops! Produto não encontrado</div>`;
    }
    else {
        produtos.forEach((produto) => {
           lista += ` 
    <div class="col" style="margin-top: 10px;">
                    <div class="card">
                        <img src='${produto.img}' class="card-img-top" alt='${produto.title}'>
                        <div class="card-body">
                            <h5 class="card-title nome-produto" title='${produto.title}'>${produto.title}</h5>
                            <p class="oculos-color">Lentes: ${produto.color}</p>
                            <p class="card-text preco-de"> <span>De:</span> ${formatter.format(produto.old_price)}</p>
                            <p class="preco-por"><span>10x </span>${formatter.format(produto.price)} <span>sem juros</span></p>
                            <a href="#" class="btn btn-primary buy-btn">COMPRAR</a>
                        </div>
                    </div>
                </div>
    `
        });
    };
    
    

    produtosContainer.innerHTML= lista
};



ListaEQuantidadesProdutos(produtos);  

document.body.addEventListener('click', function(event){
    event.preventDefault();


});
