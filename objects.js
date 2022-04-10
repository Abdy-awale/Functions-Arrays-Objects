// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ====
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender.
// Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F
const company = [
	{ id: 1, email: 'mmelloy0@psu.edu', firstName: 'Mitzi', gender: 'F' },
	{ id: 2, email: 'kdiben1@tinypic.com', firstName: 'Kenan', gender: 'M' },
	{ id: 3, email: 'kmummery2@wikimedia.org', firstName: 'Keven', gender: 'M' },
	{
		id: 4,
		email: 'gmartinson3@illinois.edu',
		firstName: 'Gannie',
		gender: 'M',
	},
	{ id: 5, email: 'adaine5@samsung.com', firstName: 'Antonietta', gender: 'F' },
];

// // Example format of an intern object: 1, examples@you.edu, Example, F
// const example = {
// 	id: 0,
// 	name: 'Example',
// 	email: 'examples@you.edu',
// 	gender: 'F',
// };

// Write your intern objects here:

// ==== Challenge 2: Reading Object Data ====
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
company[0].firstName; // Mitzi

// Kennan's ID
company[1].id; // 2

// Keven's email
company[2].email; //?

// Gannie's name
company[3].firstName; // Gannie

// Antonietta's Gender
company[4].gender; //?

// ==== Challenge 3: Object Methods ====
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ====

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
const parent = {
	name: 'Susan',
	age: 70,
};

// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
const child = {
	name: 'George',
	age: 50,
};
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
const grandchild = {
	name: 'Sam',
	age: 30,
};
// 4. Give each of the objects the ability to speak their names using the this keyword.
// parent.speak(); // Susan
// child.speak(); // George
// grandchild.speak(); // Sam
// ==== Challenge 4: Nested Objects ====
const family = {
	name: 'Susan',
	age: 70,
	child: {
		name: 'George',
		age: 50,
		grandchild: {
			name: 'Sam',
			age: 30,
			speak: function () {
				console.log(`${this.name}`);
			},
		},
		speak: function () {
			console.log(this.name);
		},
	},
	speak: function () {
		console.log(`${this.name}`);
	},
};

// 1. Log out the name of the child's grandchild.
console.log(family.child.grandchild.name); // Sam
// 2. Log out the age of the family.
console.log(family.age); // 70
// 3. Log out the name and age of the family's child.
console.log(family.child.name, family.child.age); // George 50
// 4. Log out the name and age of the family's child's grandchild.
console.log(family.child.grandchild.name, family.child.grandchild.age); // Sam 30

// const family = {};

// Log the parent object's name
console.log(family.name); // Susan

// Log the child's age
console.log(family.child.age); // 50

// Log the name and age of the grandchild
console.log(family.child.grandchild.name, family.child.grandchild.age); // Sam 30

// Have the parent speak
family.speak(); // Susan
// Have the child speak
family.child.speak(); // George

// Have the grandchild speak
family.child.grandchild.speak(); // Sam
