const form = document.getElementById('form-agenda');
const nome = [];
const pessoa = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
} );

function adicionaLinha(){
    const inputNomePessoa = document.getElementById('nome-pessoa');
    const inputNumeroPessoa = document.getElementById('numero-pessoa');

    if (nome.includes(inputNomePessoa.value)){
        alert (`A pessoa ${inputNomePessoa.value} já existe`);
    } else {
        nome.push(inputNomePessoa.value);

        let linha = '<tr>';
        linha += `<td>${inputNomePessoa.value}</td>`;
        linha += `<td>${inputNumeroPessoa.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }   
    inputNomePessoa.value ='';
    inputNumeroPessoa.value ='';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}