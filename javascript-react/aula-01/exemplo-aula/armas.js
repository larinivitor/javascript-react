class Arma {
	constructor(dano) {
		this.dano = dano
	}
}

class Espada extends Arma {
	constructor() {
		super(5)
	}
}

class Arco extends Arma {
	constructor() {
		super(6)
	}
}

class Machado extends Arma {
	constructor() {
		super(8)
	}
}
