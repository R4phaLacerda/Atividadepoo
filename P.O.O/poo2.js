const pessoa = {
    primeiroNome: 'Raphaelle',
    Sobrenome: 'Lacerda',
    Idade: 16,
    corOlho: "castanho",
    Altura: 169,
    dataNascimento: '14/3/2008',
    usaOculos: true,
    corPele: 'Branco',
    corFavorita: 'Azul',
    sexo: 'Feminino'
};

console.log('A' + pessoa.primeiroNome + pessoa.Sobrenome + ' tem' pessoa.Idade + 'anos');

//Alterar um objeto
pessoa.Sobrenome = 'Morais';

//Segunda frase
console.log('2 - O' + pessoa.primeiroNome + '' + pessoa.Sobrenome + ' tem' + pessoa.Idade);