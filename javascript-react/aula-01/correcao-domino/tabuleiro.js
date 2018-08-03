class Tabuleiro {
	constructor() {
		this.pecasNoTabuleiro = []
		this.valorEsquerda = null
		this.valorDireita = null
	}

	adicionarPecaEsquerda(peca) {
		this._validarAdicaoDePeca(peca)

		if (!this._adicionarComoPrimeiraPeca(peca)) {
			if (peca.compativelComLado(this.valorEsquerda)) {
				this.pecasNoTabuleiro.unshift(peca)
				this.valorEsquerda =
					peca.esquerda === this.valorEsquerda
						? peca.direita
						: peca.esquerda
			} else {
				throw new JogadaInvalidaError('Peça não compatível.')
			}
		}
	}

	adicionarPecaDireita(peca) {
		this._validarAdicaoDePeca(peca)

		if (!this._adicionarComoPrimeiraPeca(peca)) {
			if (peca.compativelComLado(this.valorDireita)) {
				this.pecasNoTabuleiro.push(peca)
				this.valorDireita =
					peca.direita === this.valorDireita
						? peca.esquerda
						: peca.direita
			} else {
				throw new JogadaInvalidaError('Peça não compatível.')
			}
		}
	}

	_adicionarComoPrimeiraPeca(peca) {
		let pecaFoiAdicionada = false

		if (this._ehPrimeiraPeca(peca)) {
			this.pecasNoTabuleiro.push(peca)
			this.valorDireita = peca.direita
			this.valorEsquerda = peca.esquerda
			pecaFoiAdicionada = true
		}

		return pecaFoiAdicionada
	}

	_validarAdicaoDePeca(peca) {
		if (peca instanceof Peca === false) {
			throw new JogadaInvalidaError('Peça inválida.')
		}

		if (this._pecaJaExiste(peca)) {
			throw new JogadaInvalidaError('Peça já existe.')
		}

		return true
	}

	_ehPrimeiraPeca() {
		return this.pecasNoTabuleiro.length === 0
	}

	_pecaJaExiste(peca) {
		for (let p of this.pecasNoTabuleiro) {
			if (p.ehIgual(peca)) {
				return true
			}
		}

		return false
	}
}
