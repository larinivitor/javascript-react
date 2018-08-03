class Armadura {
	constructor(defesa) {
		this.defesa = defesa
	}
}

class ArmaduraLeve extends Armadura {
	constructor() {
		super(1)
	}
}

class ArmaduraMedia extends Armadura {
	constructor() {
		super(3)
	}
}

class ArmaduraPesada extends Armadura {
	constructor() {
		super(5)
	}
}
