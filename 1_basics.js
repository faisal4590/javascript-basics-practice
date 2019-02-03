//objects and functions

var person = {
	firstName : "Faisal",
	lastName : "Ibn Aziz",
	salary : 20000,
	fullName: function()
	{
		return this.firstName + " " + this.lastName;
	}
};

console.log('Full name is ' + person.fullName());

//events

function displayDate()
{
	document.getElementById("date").innerHTML = Date();
}

// string methods
var str = "Faisal Ibn Aziz Ibn";
//indexOf() and lastIndexOf() 2 tai -1 return kore jodi kono match na pay.
console.log(str.indexOf('Ibn', 5)); //5 no position theke start korbe(faisal er l theke)

console.log('Match found at '+ str.search('Ibn')   + ' th position');//search method returns the index where it found the match

/*
	substr() is similar to slice().
	The difference is that the second parameter specifies the length of the extracted part.
*/
console.log('After slicing, the string is ' + str.slice(1,4));

console.log('After using substring, the string is ' + str.substring(1, 4));

console.log('After replacing, the string becomes ' + str.replace(/ibn/i,'Ibna'));//regular expression for case insensative
console.log('After replacing, the string becomes ' + str.replace(/Ibn/g,'Ibna'));//joto jaygay ibn pabe shob gulate replace korbe(global replace)

//arrays

let cars = [
	'volvo',
	'bmw',
	'toyota'
];

console.log('The length of the array is ' + cars.length);

console.log('After sorting, the array becomes ' + cars.sort());

//example of array iteration
htmlElement = "<ul>";
for (i = 0; i < cars.length; i++) {
  htmlElement += "<li>" + cars[i] + "</li>";
}
htmlElement += "</ul>";

console.log("Using for loop : " + htmlElement);

//better way of array iteration

htmlElement = "<ul>";
cars.forEach(loopingFunction);
htmlElement += "</ul>";

function loopingFunction(value)
{
	 htmlElement += "<li>" + value + "</li>";
}

console.log("Using forEach loop : " + htmlElement);

//adding new elements in array
cars.push('nixon');
console.log('After adding a new element, the array becomes ' + cars.sort());

//array vs object

/*
	In JavaScript, arrays use numbered indexes.  
	In JavaScript, objects use named indexes.
*/

//array iteration using map

var numbers = [45, 4, 9, 16, 25];
console.log("After filtering, the array becomes : " + numbers.filter(myFunction));

function myFunction(value, index, array) {
  return value > 18; // array er protita index e loop chalaye filter korlam >18 gula ke
}

// Javascript dates
 var d= new Date("2015-03-25");//creating a date object
 console.log("The date is " + d);