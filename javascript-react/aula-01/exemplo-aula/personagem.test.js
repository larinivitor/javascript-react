test('personagem: deve começar com nível 1', assert => {
	const personagem = new Personagem('Thor', 50)

	assert.equals(1, personagem.nivel)
})

test('personagem: deve começar sem arma e armadura', assert => {
	const personagem = new Personagem('Thor', 50)

	assert.equals(null, personagem.arma)
	assert.equals(null, personagem.armadura)
})

test('personagem: nivel 4 tem poder de ataque 4', assert => {
	const personagem = new Personagem('Thor', 50)

	personagem.nivel = 4

	assert.equals(4, personagem.getPoderDeAtaque())
})

test('personagem: nivel 3 tem poder de defesa 3', assert => {
	const personagem = new Personagem('Thor', 50)

	personagem.nivel = 3

	assert.equals(3, personagem.getPoderDeDefesa())
})

test('personagem: nivel 2 com espada tem 7 de ataque', assert => {
	const personagem = new Personagem('Thor', 50)

	personagem.nivel = 2
	personagem.equiparArma(new Espada())

	assert.equals(7, personagem.getPoderDeAtaque())
})

test('personagem: nivel 2 com armadura leve tem 3 de defesa', assert => {
	const personagem = new Personagem('Thor', 50)

	personagem.nivel = 2
	personagem.equiparArmadura(new ArmaduraLeve())

	assert.equals(3, personagem.getPoderDeDefesa())
})

test('personagem: nao pode equipar arma invalida', assert => {
	assert.throws(Error, () => {
		const personagem = new Personagem('Thor', 50)
		personagem.equiparArma({ dano: 10000 })
	})
})

test('personagem: nao pode equipar armadura invalida', assert => {
	assert.throws(Error, () => {
		const personagem = new Personagem('Thor', 50)
		personagem.equiparArmadura({ defesa: 10000 })
	})
})

test('personagem: nivel 1 sobe para nivel 2', assert => {
	const personagem = new Personagem('Thor', 100)
	personagem.subirDeNivel()

	assert.equals(2, personagem.getNivel())
})
