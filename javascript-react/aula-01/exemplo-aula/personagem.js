class Personagem {
	constructor(nome, vida) {
		this.nome = nome
		this.vida = vida
		this._nivel = 1

		this.arma = null
		this.armadura = null
	}

	getNivel() {
		return this._nivel
	}

	subirDeNivel() {
		this._nivel += 1
	}

	equiparArma(arma) {
		if (arma instanceof Arma) {
			this.arma = arma
			return
		}

		throw new Error('Arma inválida.')
	}

	equiparArmadura(armadura) {
		if (armadura instanceof Armadura) {
			this.armadura = armadura
			return
		}

		throw new Error('Armadura inválida.')
	}

	getPoderDeAtaque() {
		if (!this.arma) {
			return this.getNivel()
		}

		return this.getNivel() + this.arma.dano
	}

	getPoderDeDefesa() {
		if (!this.armadura) {
			return this.getNivel()
		}

		return this.getNivel() + this.armadura.defesa
	}
}
