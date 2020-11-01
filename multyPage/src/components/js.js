class Human {
	constructor(name, age) {
		this.name = name,
		this.age = age
	}
	sayName() {
		console.log('name', this.name);
	}
	sayAge() {
		console.log('age', this.age);
	}
}
const gendalf = new Human('Gendalf', 666);
gendalf.sayName();
gendalf.sayAge();

export const a = 1;
export const b = 5;
const c = a + b;
console.log(c);