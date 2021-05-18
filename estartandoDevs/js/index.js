function inverter(termo) {
  return termo.split('').reverse().join('');
}
const textoInvertido = inverter("azul");

console.log(textoInvertido);

function contarNumeroVogais(frase) {
  if (typeof frase === "string") {
    const listaVogais = ("aeiou").split("")
    const fraseQuebrada = frase.toLowerCase().replace(" ", "").split("")
    let quantidadeVogais = 0
    let listaEncontrada = []

    for (let i = 0; i < fraseQuebrada.length; i++) {
      if (listaVogais.includes(fraseQuebrada[i])) {
        quantidadeVogais++
        listaEncontrada = [...listaEncontrada, fraseQuebrada[i]]

      }

    }

    console.log(quantidadeVogais, listaEncontrada)
  } else {
    console.error("Deu ruim!")
  }
}

contarNumeroVogais("bem vindo Edimilson")
contarNumeroVogais(213)
contarNumeroVogais("cvdrgtrgtrtgrrt")