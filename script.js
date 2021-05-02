/* Instanceof is a way to check if 'myCar' is an instance of 'Car' */

function Car (year, owner, manufacturer) {
  this.year = year;
  this.owner = owner;  
	this.manufacturer = manufacturer;
	this.speak = function () {
    
		console.log (`vrooooooom!`);
    
	}
};

let myCar = new Car ("1980","Me","BMW")

myCar instanceof Car;
/* the Car obejct is an abstract object from which all other cars can be created, they can be ford,ferrari,porsche, rolls royce, all these cars we use on a daily basis are 'instances' of a 'Car' object.
they got their properties, name, owner, and manufacturer from the 'Car' object
We can use 'instanceof' operator to test wheather some 'instance' is an instance of some object*/