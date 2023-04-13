const array = [1, 2, 3, 4, 5, 6, 7]

// previusValue = valor que vai acumular   |   currentValue = o próximo valor   |   index = O valor atual
function sum(arr) {
    return arr.reduce((acumulador, proximo) => {
        return acumulador + proximo;
    })
}

console.log(sum(array))
