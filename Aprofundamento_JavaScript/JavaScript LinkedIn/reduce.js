/*
REDUCE():

1. Executa uma função para todo os elemento retornando um só valor.

reducer(callbackFn, initialValue)

callback = Função a ser executada a partir do acumulador;
initialValue = Valor sobre o qual o retorno final irá atuar.
*/


/* Funcionamento do REDUCE()
const callbackFn = function((accumulator, currentValue, index, array){
    return (accumulator + currentValue)
})

array.reduce(callbackFn, initialValue)
*/

const array = [1, 2, 3, 4, 5, 6]

const sum = (acumulador, atual) => {
    return (acumulador + atual)
}

console.log(array.reduce(sum))
