// import Personagem from '../app/js/exemplo-para-teste'

const Personagem = require('../app/js/exemplo-para-teste')

test('falar retorna cumprimeto com o nome', () => {
    const personagem = new Personagem('Goku')
    const esperado = 'Olá, eu sou o Goku'
    const obtido = personagem.falar()

    expect(obtido).toBe(esperado)
})
