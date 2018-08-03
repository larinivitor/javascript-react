test('tabuleiro: primeira peca é 4/4', assert => {
	const tabuleiro = new Tabuleiro()
	const peca = new Peca(4, 4)

	tabuleiro.adicionarPecaDireita(peca)

	assert.equals(peca, tabuleiro.pecasNoTabuleiro[0])
})

test('tabuleiro: pecas iguais nao podem estar no tabuleiro', assert => {
	assert.throws(JogadaInvalidaError, assert => {
		const tabuleiro = new Tabuleiro()
		const peca12 = new Peca(1, 2)
		const peca21 = new Peca(2, 1)

		tabuleiro.adicionarPecaDireita(peca12)
		tabuleiro.adicionarPecaDireita(peca21)
	})
})

test('tabuleiro: peca nao compativel com lado causa erro.', assert => {
	assert.throws(JogadaInvalidaError, () => {
		const tabuleiro = new Tabuleiro()
		const peca11 = new Peca(1, 1)
		const peca66 = new Peca(6, 6)

		tabuleiro.adicionarPecaDireita(peca11)
		tabuleiro.adicionarPecaEsquerda(peca66)
	})
})

test('tabuleiro: peca compativel é encaixada na esquerda', assert => {
	const tabuleiro = new Tabuleiro()
	const peca11 = new Peca(1, 1)
	const peca16 = new Peca(1, 6)

	tabuleiro.adicionarPecaDireita(peca11)
	tabuleiro.adicionarPecaEsquerda(peca16)

	assert.equals(6, tabuleiro.valorEsquerda)
})

test('tabuleiro: peca incompativel não é encaixada na esquerda', assert => {
	assert.throws(JogadaInvalidaError, () => {
		const tabuleiro = new Tabuleiro()
		const peca11 = new Peca(1, 1)
		const peca26 = new Peca(2, 6)

		tabuleiro.adicionarPecaDireita(peca11)
		tabuleiro.adicionarPecaEsquerda(peca26)
	})
})
