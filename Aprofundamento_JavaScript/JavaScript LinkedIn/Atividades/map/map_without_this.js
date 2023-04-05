const Mult_num = {
    value: 2
}

const num = [1, 2, 3, 4, 5]

// Sem utilizar o argumento THIS
function mult(arr, object){
    return arr.map((item) => item * object.value)
}

console.log(mult(num, Mult_num))
