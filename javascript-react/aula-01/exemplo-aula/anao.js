class Anao extends Personagem {
	constructor(nome) {
		super(nome)

		this.vida = 10 * this.getNivel()
	}

	subirDeNivel() {
		super.subirDeNivel()

		this.vida = 10 * this.getNivel()
	}

	getPoderDeAtaque() {
		const ataqueBase = super.getPoderDeAtaque()

		if (this.arma instanceof Machado) {
			return ataqueBase + 2
		}

		return ataqueBase
	}
}
