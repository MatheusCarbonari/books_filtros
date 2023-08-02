const elementoParaInserirLivros = document.getElementById('livros');
const ValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirOsLivrosNaTela(listaDeLivros){

    ValorTotalDeLivrosDisponiveis.innerHTML = '';

    elementoParaInserirLivros.innerHTML = '';

    listaDeLivros.forEach(livro => {

        if(livro.quantidade <= 0){
            var indisponivel = 'indisponivel';
        }else{
            var indisponivel = '';
        }

        elementoParaInserirLivros.innerHTML += `
            <div class="livro">
                <img class="livro__imagens ${indisponivel}" src="${livro.imagem}" alt="${livro.alt}" />
                <h2 class="livro__titulo">
                    ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
            </div>
        `
    });

}
