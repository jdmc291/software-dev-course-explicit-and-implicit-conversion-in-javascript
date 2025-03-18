/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// I will not have to do anything with this section because the subtraction triggers a numeric conversion, which makes 5 and actual number instead of a string
let result = "5" - 2;
console.log("The result is: " + result);

//if the "isValid" is meant to be false, we would have to take out the double quotation marks around the "false". I took the quotes out to make the boolean represent false.
//... Anything besides 0, null, undefined, NaN and an empty string will only be converted to false
let isValid = Boolean(false);
if (isValid) {
    console.log("This is valid!");
}


//I used the number function to convert the age variable into a number due to the "+" being implicit concatenation
let age = "25";

let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

  //My Own examples.

//Implicit Conversion
let numOfUmbrellas = "20"
let people = 5;
let UmbrellaPerPerson = numOfUmbrellas / people;

console.log("Each person will take home " + UmbrellaPerPerson + " because we have too many")

//Explicit Conversion
let value
let isRaining = Boolean(value)

if (isRaining) {
  console.log("Make sure to bring your umbrella!");
}
else{
  console.log("You do not need to bring your umbrella today");
}