test('peca: valor minimo é 0 e máximo é 6', assert => {
	assert.equals(0, Peca.VALOR_MINIMO)
	assert.equals(6, Peca.VALOR_MAXIMO)
})

test('peca: 1/2 encaixa com 2/4', assert => {
	const peca12 = new Peca(1, 2)
	const peca24 = new Peca(2, 4)

	assert.isTrue(peca12.podeEncaixar(peca24))
})

test('peca: 1/2 não encaixa com 4/4', assert => {
	const peca12 = new Peca(1, 2)
	const peca44 = new Peca(4, 4)

	assert.isFalse(peca12.podeEncaixar(peca44))
})

test('peca: criar peca com valor minimo invalido resulta em erro', assert => {
	assert.throws(PecaInvalidaError, () => {
		const peca = new Peca(-1, 5)
	})
})

test('peca: criar peca com valor maximo invalido resulta em erro', assert => {
	assert.throws(PecaInvalidaError, () => {
		const peca = new Peca(0, 7)
	})
})
