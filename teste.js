class Teste {
    #altura
    constructor(altura) {
        this.#altura = altura
    }
    get altura() {
        return this.#altura + " é essa a altura :D"
    }
    set altura(novaaltura) {
        this.#altura = novaaltura
    }
}
let testa = new Teste(5)

testa.altura = 6
console.log(testa, testa.altura)