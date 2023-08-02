const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros(){

    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;

    let livrosFiltrados = filtar(categoria);

    exibirOsLivrosNaTela(livrosFiltrados)

    if(categoria == 'disponivel'){

        const valorTotal = calcularValorTotaldeLivrosDisponiveis(livrosFiltrados);

        exibirValorTotalDosLivrosdisponiveis(valorTotal);

    }

};

function filtar(categoria){

    if(categoria == 'disponivel'){
        return livros.filter(livro => livro.quantidade > 0);
    }else{
        return livros.filter(livro => livro.categoria == categoria);
    }
    
}

function exibirValorTotalDosLivrosdisponiveis(valorTotal){
    ValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}