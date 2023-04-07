// Melhor demonstração de 'this':
{
    const dados = {
        name: "Rafael",
        name2: {
            name3: "Julio"
        },
        um_teste() {
            console.log(dados.name) // usando o nome da variável onde ele mesmo está.
            
            console.log(this.name) // utilizando this para demonstrar que é no mesmo local.
            
            console.log(this.name2.name3)
        }
    }

    dados.um_teste()
}


// Segunda demonstração:
{
    const array = [1, 2, 3, 4, 5, 6]
    
    const func_pair = {
        array1: array,
        retorno() {
            const new_array = this.array1.map((item) => item ** 2)
    
            return new_array
        }
    }
    
    console.log(func_pair.retorno())
}
