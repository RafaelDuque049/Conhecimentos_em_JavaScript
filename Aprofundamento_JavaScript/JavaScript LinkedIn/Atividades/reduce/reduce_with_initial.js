const lista = [
    {
        item: "sabão",
        valor: 30
    },
    {
        item: "cereal",
        valor: 12
    },
    {
        item: "toalha",
        valor: 30
    }
]

const saldo = 100

function calcularSaldo(listItem, SaldoDisponivel) {
    return listItem.reduce((previus, current) => {
        return previus - current.valor
    }, SaldoDisponivel) // O Previus vai começar como valor inicial, o SaldoDisponivel.
}

console.log(calcularSaldo(lista, saldo))
