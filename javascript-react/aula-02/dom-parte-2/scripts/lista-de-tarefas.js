class ListaDeTarefas {
	constructor() {
		this.tarefas = []
	}

	adicionarTarefa(tarefa) {
		this.tarefas.push(tarefa)

		const id = tarefa.id
		const li = document.createElement('li')
		const checkbox = document.createElement('input')
		checkbox.setAttribute('type', 'checkbox')
		checkbox.setAttribute('id', id)

		const label = document.createElement('label')
		label.innerHTML = tarefa.texto
		label.setAttribute('for', id)

		li.appendChild(checkbox)
		li.appendChild(label)

		ulNotasCriadas.appendChild(li)
	}
}

export default ListaDeTarefas
