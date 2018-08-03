test('anao: anao no nivel 1 tem 10 de vida', assert => {
	let anao = new Anao('Gimli')

	assert.equals(10, anao.vida)
})

test('anao: nivel 1 para nivel 2 tem 20 de vida', assert => {
	let anao = new Anao('Gimli')
	anao.subirDeNivel()

	assert.equals(20, anao.vida)
})
