// MAP() = array.map(callback, thisArg) 
// Callback -> (item, index, array) : Função a ser executada para cada elemento.
// ThisArg : Recebe o valor da variável selecionada. (Melhor entendimento veja em "this.js")


let array = [1, 2, 3, 4, 5]

let array2 = array.map((item) => item * 2)

console.log(array)

console.log(array2)

let array3 = array.forEach((item) => item * 2) // O 'forEach' não interaje com nenhum objeto do Array.

console.log(array3)
