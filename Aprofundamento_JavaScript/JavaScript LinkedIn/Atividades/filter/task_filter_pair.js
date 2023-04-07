// Deixar um Array apenas com números pares
let lista_num = []

for(var num = 0; num <= 50; num++){
    lista_num.push(num)
}

const list_pair = lista_num.filter((item) => item % 2 == 0)

console.log(...list_pair)
