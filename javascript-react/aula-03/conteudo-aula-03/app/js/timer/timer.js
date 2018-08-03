class PropagandaChata {
    agendar(texto) {
        setTimeout(() => {
            this._mostrarPropaganda(texto)
        }, 5000)
    }

    _mostrarPropaganda(textoDaPropaganda) {
        alert(textoDaPropaganda)
    }
}

const propaganda = new PropagandaChata()

propaganda.agendar('TRIVAGO!!!!')
