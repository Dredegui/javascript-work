"use strict"

// alert(n3); // Shows the message content in a pop-up
/* You can use stuff like let initialization1 , initialization2, initialization2;

let n1 = 10;
let n2 = 20;
let n3 = n1;
n3 += 2;
and even break them apart on new lines so its readable
*/
/* names like $ and _ are valid in java script
names cannot contain especial char meaning anything other than a char or a num or _ and $.
and names cannot start with numbers. (case matters)
ex:
	- let 1a;
	- let my-name;
Also reserved names should not be reused:
	- let let = 5;
	- let return = 5;
	It's a syntax error;
*/

// Const
/*
const myBirthDay = "08.05.2002";
cont are constants cannot be reassinged
myBirthDay = "13.08.2002";
would be an error
---------------------------------------------------------
It's considered a good practice to name constants
in all uppercase and with _(underscore) as a seperator
---------------------------------------------------------
Const can be assigned mid run-time but those don't get assigned 
capital-names.
*/


// Numbers

let x = 123e5; // 13200000 this allows scientific notation
let y = 123e-5; // 0.00123 this allows scientific notation

// Javascript always stores numbers as 64 bits, meaning 8 Bytes (double precision)

// Strings

let stringx = "10";
let stringy = "20";
let stringz = stringx + stringy;


// WARNING: JAVASCRIPT DOESN'T EMIT ERRORS FOR LACK OF ; IT TRIES TO GUESS HOW ITS SUPPOSED TO BE
/*
javascript also uses + operator for concatenation
so adding strings results in their concatenation respectively
this also happens when you add string and integer it converts integer
to string and then adds like it does with strings.
(Doesn't matter how many integers there are, 
but it does matter the order, going from right to left,
the moment the integers are addes to a string it's only concatenation from there on out
so if its i1 + i2 + s1;
it adds the integers as they are
and treats them as strings the moment you add them to one.)
*/


/* Strings as nums
If we use any operator except + between strings,
if the strings contain numerical values it will execute
the operation as if they were numbers and return a number
If the strings aren't numerical values it will result
in NaN A.K.A Not A Number.
there is a function isNaN(value);
Nan is defined as a number
*/ 

// Infinity returns if we calculate a number outside the largest possible or divide by 0

// We can use the + operator to convert NaN operands to numbers
/*
let x = "3";
let y = +x;
y vai ser 3 typeof == number
ou 
let x = true;
let y = +x;
y vai ser 1 typeof == number
*/

// Bitwise operators
/*
	AND: &
	OR: |
	XOR: ^
	NOT: ~
	LEFT SHIFT: <<
	LEFT SHIFT: >>
	ZERO-FILL RIGHT SHIFT >>>
*/

// Comma is weird check https://javascript.info/operators

/**
 * In javascript == only checks the deep copy
 * === beyond checking if they hold the same value it checks if they have the same type 
 */

// You can escape especial char with \

/** Concatenating strings
 * const name = "chris";
 * greeting = `Hello, ${name}`;
 * the ${var}
 * will insert the variable value into the result
 */


// Number() to convert to number and toString() to convert anything to string

// Methods to modify and play with strings: https://www.w3schools.com/js/js_string_methods.asp

// Slices are superior substrings, in terms of power, but substring dont allow slice(-12, -6) while slices do
// Substrings also switch start and end if start > end, while slice returns empty string
// Substr() is the same as slice but the second parameter is length
// Replace replaces first match and returns a new string, there is alo a case insensetive flag and a global one

// Short if: condition || alert(blah); alert only runs if condition is false (not readable tho)

// &&(AND) has precedence over ||(OR)
// !(NOT)

/**
 * ? is weird, after it is supposedly the return value associated with the condition that was satisfied before it
 * all next ? only get executed if the first wasn't, it is also seperated by :
 * basically its a sequence of else ifs 
 * Ex:
 * 	- message = (age < 4) ? "Hey dumb infant" : (age < 18) ? "Hey stupidass teen"; 
 * It should be only used for allocations?
 */

// Data types: https://javascript.info/types#summary

/**
 * arrays []
 * 	defined as constant but even so you can change the values of the array itself you just can't 
 * 	change the reference associated with the keyword
 * functions
 * 	function myFunction(var) {
 * 				return whtver;
 * 			}
 * 	anonymous functions:
 * 		- (function(var) {statements})
 * 		- (var) => {statements}
 *  shitty map functions : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions
 */