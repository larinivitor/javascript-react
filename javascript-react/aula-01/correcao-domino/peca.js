class Peca {
	constructor(esquerda, direita) {
		this.esquerda = esquerda
		this.direita = direita

		this._validarCriacao()
	}

	podeEncaixar(peca) {
		if (this === peca) {
			return false
		}

		return (
			this._ladoEhCompativelComEstaPeca(peca.esquerda) ||
			this._ladoEhCompativelComEstaPeca(peca.direita)
		)
	}

	ehIgual(peca) {
		return (
			(peca.esquerda === this.esquerda &&
				peca.direita === this.direita) ||
			(peca.direita === this.esquerda && peca.esquerda === this.direita)
		)
	}

	compativelComLado(lado) {
		return this.esquerda === lado || this.direita === lado
	}

	_validarCriacao() {
		this._validarLado(this.esquerda)
		this._validarLado(this.direita)
	}

	_validarLado(lado) {
		if (lado < Peca.VALOR_MINIMO) {
			throw new PecaInvalidaError(`Valor mínimo é ${Peca.VALOR_MINIMO}.`)
		}

		if (lado > Peca.VALOR_MAXIMO) {
			throw new PecaInvalidaError(`Valor máximo é ${Peca.VALOR_MAXIMO}.`)
		}
	}

	_ladoEhCompativelComEstaPeca(lado) {
		return lado === this.esquerda || lado === this.direita
	}
}

Peca.VALOR_MINIMO = 0
Peca.VALOR_MAXIMO = 6
