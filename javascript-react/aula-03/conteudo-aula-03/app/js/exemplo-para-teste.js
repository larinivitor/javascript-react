class Personagem {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        return `Olá, eu sou o ${this.nome}`
    }
}

module.exports = Personagem
