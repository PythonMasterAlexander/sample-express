/*
	Create a object
*/
let object = {
	fruit: "apple",
	color: "green"
};

/*
	Use spread operator
	This will create two new variables fruit and color
	These variable are now not a reference to the object but variables on
	there own. Meaning you can change the bindings without changing the values
	in the object.
*/
let { fruit, color } = { ...object };
console.log(`Fruit: ${fruit}, Color: ${color}`);

color = "red";
console.log(`object.color: ${object.color}, color: ${color}`);
