const ordenar = document.getElementById('btnOrdenarPorPreco');

ordenar.addEventListener('click', ordenarLivros);

function ordenarLivros(){

    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);

    exibirOsLivrosNaTela(livrosOrdenados);

}
