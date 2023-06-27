class Forma {
    constructor(altura) {
        this.altura = altura
    }
    calcularArea() {
        console.log(`função calcularArea() da classe Forma de altura ${this.altura}`)
    }
    calcularVolume() {
        console.log(`função calcularVolume() da classe Forma de altura ${this.altura}`)
    }
}

class FormaPlana extends Forma {
    #tipo
    #base
    #comprimento
    constructor(altura, tipo, base, comprimento) {
        super(altura)
        this.#tipo = tipo.toLowerCase()
        this.#base = base
        this.#comprimento = comprimento
    }
    calcularArea() {
        if (this.#tipo == "retangular") {
            let volume = this.#base * this.altura
            return volume
        } else if (this.#tipo == "triangular") {
            let volume = (this.#base * this.altura) / 2
            return volume
        } else {
            console.log("tipo inválido, insira 'triangular' ou 'retangular'")
        }
    }
    calcularVolume() {
        if (this.#tipo == "retangular") {
            let areabase = this.calcularArea()
            let volume = areabase * this.#comprimento
            return volume.toFixed(2)
        } else if (this.#tipo == "triangular") {
            let areabase = this.calcularArea()
            let volume = (areabase * this.#comprimento) / 2
            return volume.toFixed(2)
        } else {
            console.log("tipo inválido, insira 'triangular' ou 'retangular'")
        }
    }

    get otipo() {
        return this.#tipo
    }
    get obase() {
        return this.#base
    }
    get ocomprimento() {
        return this.#comprimento
    }

    set tipo(novotipo) {
        this.#tipo = novotipo.toLowerCase()
    }
    set base(novobase) {
        this.#base = novobase
    }
    set comprimento(novocomprimento) {
        this.#comprimento = novocomprimento
    }

}
class FormaCircular extends Forma {
    static #pi = 3.14
    #raio
    constructor(raio, altura = 0) {
        super(altura)
        this.#raio = raio
    }
    calcularArea() {
        let base = FormaCircular.#pi * (this.#raio * this.#raio)
        return base.toFixed(2)
    }
    calcularVolumeCilindro() {
        let areabase = this.calcularArea()
        let volume = areabase * this.altura
        return volume.toFixed(2)
    }
    calcularVolumeCone() {
        let areabase = this.calcularArea()
        let volume = (areabase * this.altura) / 3
        return volume.toFixed(2)
    }
    calcularVolumeEsfera() {
        let areabase = this.calcularArea()
        let volume = areabase * this.#raio * (4 / 3)
        return volume.toFixed(2)
    }

}

let insforma = new Forma(3)
insforma.calcularArea()
insforma.calcularVolume()

let insforplana = new FormaPlana(5, "retangular", 10, 6)
let saida11 = insforplana.calcularArea()
let saida12 = insforplana.calcularVolume()
let saida13 = insforplana.obase
let saida14 = insforplana.otipo
let saida15 = insforplana.ocomprimento
console.log(insforplana, saida11, saida12, saida13, saida14, saida15, "opaaa")

let insforcircular = new FormaCircular(7, 8)
let saida21 = insforcircular.calcularVolume()
let saida22 = insforcircular.calcularArea()
let saida23 = insforcircular.calcularVolumeCilindro()
let saida24 = insforcircular.calcularVolumeCone()
let saida25 = insforcircular.calcularVolumeEsfera()

console.log(insforcircular, saida21, saida22, saida23, saida24, saida25, "opaaa")

