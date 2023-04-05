const Mult_num = {
    value: 5
}

const num = [1, 2, 3, 4, 5]


// Utilizando o argumento THIS
function sum(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value
    }, thisArg)
}

console.log(sum(num, Mult_num))