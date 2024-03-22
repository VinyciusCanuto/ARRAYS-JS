// Estrutura de dados -> ARRAY
const array = []
const vetor = new Array()

console.log(typeof array)
console.log(typeof vetor)

// Refêrencias aos elementos de um array 
const produtos = ["Arroz", "Feijão", "Iogurt"]
console.log(produtos[3])

// Inclusão e exclusão de elementos/item
const estados = ["Alagoas"]

estados.push('Recife') // Adiciona no final do array
console.log(estados)
//[0,1,2]
estados.unshift('Bahia')//Adiciona no ínicio
console.log(estados)

estados.pop() //Excluir no final do array
console.log(estados)

estados.shift() // Excluir no início do array
console.log(estados)

//Verificar o tamanho/quantidade de itens do array
const numeros = [1,2,3,4,5,6]
console.log(`tamanho do array: ${numeros.length}`)

//Apresentar dados de um array
const cidades =['Maceió', 'Rio largo', 'Marechal']
console.log(`${cidades.toString()}`)

