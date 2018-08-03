import Tarefa from './tarefa'

const ENTER_KEY_CODE = 13

class Formulario {
	constructor() {
		this.listaDeTarefasVinculada = null
		this._configurar()
	}

	vincularListaDeTarefas(lista) {
		this.listaDeTarefasVinculada = lista
	}

	_configurar() {
		txtNotas.addEventListener('keydown', event => {
			if (event.keyCode === ENTER_KEY_CODE) {
				this._adicionarTarefa()
			}
		})
	}

	_adicionarTarefa() {
		const tarefaModel = new Tarefa(txtNotas.value)

		if (tarefaModel.estaValida()) {
			this._esconderMensagem()
			this.listaDeTarefasVinculada.adicionarTarefa(tarefaModel)
			txtNotas.value = ''
		} else {
			this._mostrarMensagem('Tarefa inválida.')
		}
	}

	_mostrarMensagem(mensagem) {
		const elAlerta = document.getElementsByClassName('alerta')[0]
		const elTextoAlerta = document.getElementsByClassName('texto-alerta')[0]

		elAlerta.classList.remove('invisivel')
		elTextoAlerta.innerHTML = mensagem
	}

	_esconderMensagem() {
		const elAlerta = document.getElementsByClassName('alerta')[0]
		if (!elAlerta.classList.contains('invisivel')) {
			elAlerta.classList.add('invisivel')
		}
	}
}

export default Formulario
