/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var variavel = [1, 'André', true, [1, 2, 3], {sobrenome: 'Lima'}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(array) {
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(variavel)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function doisParametros(array, num) {
    return array[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var variavelDois = [1, 'André', true, [1, 2, 3], {sobrenome: 'Lima'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(doisParametros(variavelDois, 0));
console.log(doisParametros(variavelDois, 1));
console.log(doisParametros(variavelDois, 2));
console.log(doisParametros(variavelDois, 3));
console.log(doisParametros(variavelDois, 4));


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro) {
    var livros = {
        'livroUm': {
            quantidadePaginas: 100,
            autor: 'André',
            editora: 'Lima',
        },
        'livroDois': {
            quantidadePaginas: 200,
            autor: 'João',
            editora: 'Maria',
        },
        'livroTres': {
            quantidadePaginas: 300,
            autor: 'Enzo',
            editora: 'Valentina',
        },
    };
    
    if (nomeLivro)
        return livros[nomeLivro];
    return livros;
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro livroUm tem ' + book('livroUm').quantidadePaginas + ' páginas')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro livroDois é ' + book('livroDois').autor + '.')


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro livroTres foi publicado pela editora ' + book('livroTres').editora + '.')
