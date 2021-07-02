class Human {
	constructor(weapon) {
		this.weapon = weapon
		this.health = 100
	}
	receivedamage() {
		this.health = this.health - 10
	}
}
class Wizrad extends Human {
	receivedamage() {
		this.health = this.health - 5
	}
}
var wizrad = new Wizrad("staff")
wizrad.receivedamage()
console.log(wizrad.health)
