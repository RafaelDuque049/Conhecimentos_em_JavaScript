/*
FILTER():

1. Não modifica o Array original
2. Filtra para apenas os itens que correspondem a condição continuarem
3. E cria um novo Array

* FIlter(Callback, ThisArg) 
*/


const frutas = ["maça fuji", "maça verde", "laranja", "abacaxi"]

const new_frutas = frutas.filter((fruta) => // filter() = Método para filtrar.
    fruta.includes("maça") // includes() = retornar true se o valor repassado está incluso.
)

console.log(new_frutas)
