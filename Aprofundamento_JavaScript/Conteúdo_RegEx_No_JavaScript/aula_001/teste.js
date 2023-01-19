const text = `
Olá, bom dia! meu nome é Rafael, como você vai?
Olá Rafael, prazer em te conhecer!
`

console.log(text.search(/Rafael/i)) // Retorna posição usando a Expressão regular.

console.log(text.search("Rafael")) // Retorna a posição utilizando String/number - (Mais recomendado utilização do IndexOf em caso de pesquisa simples por ser mais rápido).

console.log(/Rafael/g.test(text)) // retorna em valor boleano.

console.log(/Rafael/g.exec(text)) // retorna em uma mistura de Objeto e Array.

console.log(/[0-9]/i.test(text)) // [0-9] = Verifica se há um valor de zero a nove.

console.log(/[a-z]/i.test(text)) // [a-z] = verifica se há um valor da letra "A" até a letra "Z".

console.log(/[a-z0-9]/i.test(text)) // [a-z0-9] = verifica se há um número ou uma letra.