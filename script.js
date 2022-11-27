// Faça uma função aboveAverageGrades que recebe um array de notas como parâmetro e retorna um array que possui apenas as notas acima da média
const meuArray = [9, 10, 8, 2, 1, 9, 0, 6, 7, 3, 8]
function aboveAverageGrades() {

    let soma = 0
    for (let i in meuArray) {
        soma += meuArray[i]
    }

    let media = (soma / meuArray.length)
    let mediaFixed = media.toFixed(2)
    return mediaFixed
}
console.log("a mediaé: ", aboveAverageGrades());




// Faça uma função averageGrades que recebe um array de notas como parâmetro e retorna um array que possui apenas as notas na média.

function averageGrades() {
    let arrPositivo = new Array
    for (let i in meuArray) {
        if (meuArray[i] > aboveAverageGrades()) {
            arrPositivo.push(meuArray[i])
        }
    }
    return arrPositivo
}
console.log("as notas acima da media são: ", averageGrades());

// Faça uma função belowAverageGrades que recebe um array de notas como parâmetro e retorna um array que possui apenas as notas abaixo da média.

function belowAverageGrades() {
    let arrPositivo = new Array
    for (let i in meuArray) {
        if (meuArray[i] < aboveAverageGrades()) {
            arrPositivo.push(meuArray[i])
        }
    }
    return arrPositivo
}
console.log("as notas a baixo da media são: ", belowAverageGrades());

// Faça uma função sumOfAllGrades que recebe um array de notas como parâmetro e retorna a soma total das notas.
function sumOfAllGrades() {
    let somaTotal = 0
    for (let i in meuArray) {
        somaTotal += meuArray[i]
    }
    return somaTotal
}
console.log(' a soma total das notoas é:', sumOfAllGrades());
// Faça uma função averageOfGrades que recebe um array de notas como parâmetro e retorna a média de todas as notas.
// Faça uma função maxGrade que recebe um array de notas como parâmetro e retorne a maior nota.
// Faça uma função minGrade que recebe um array de notas como parâmetro e retorne a menor nota.
