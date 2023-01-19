
const textCPF = `
O CPF do senhor é: 342-352-644-24
E seu RG 67.454.4545
`

console.log(/[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{2}/.exec(textCPF))