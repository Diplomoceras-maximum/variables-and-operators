// Logging Basic Maths

console.log(23 + 97); // 120
console.log(43 + 23 + 9 + 102 + 18 + 71); // 266
console.log((4 + 6 + 9) / 77); // 0.24675324675324675

// Declaring and Logging Variables

let a = 10;
console.log(a); // 10

a = 15; // Reassign a to 15
console.log(a); // 15

let b = 7 * a;
console.log(b); // 105 (7 x reassigned value of a : 7 x 15 = 105)

// Declaring a Constant Variable

const max = 57;
const actual = max - 13;
const percentage = actual / max;

console.log(percentage); // 0.7719298245614035

// Operations

// Addition +

console.log(15 + 5); // 20

// Subtraction -

console.log(20 - 5); // 15

// Multiplication *

console.log(10 * 10); // 100

// Division /

console.log(100 / 4); // 25

// Remainder % (Remainder of the division)

console.log(5 % 2); // 1 (2 only fits 2 times and leaves 1)
console.log(8 % 3); // 2 (3 only fits 2 times and leaves 2)
console.log(8 % 4); // 0 (4 fits twice and leaves 0)

// Exponentiation ** (to the power of)

console.log(2 ** 2); // 4 (2 x 2 = 4)
console.log(2 ** 3); // 8 (2 x 2 x 2 = 8)
console.log(2 ** 4); // 16 (2 x 2 x 2 x 2 = 16)

// Unary vs Binary and Operand

// Operator is unary if it has a single operand (x++, x being the operand)
// Operator is binary if it has two operands (5 * 3, 5 and 3 being the two operands)
// Operands are what operators are applied to, sometimes called arguments

// String Concatenation (Binary)

// Only works with + operator

let message = "Hello" + " " + "World";
console.log(message); // Hello World

let calc = "1" + 2;
console.log(calc); // 12 (If atleast 1 operand is a string all others are converted to string)

let calc2 = 2 + 2 + "1";
console.log(calc2); // 41 (4 + "1")

let calc3 = "1" + 2 + 2;
console.log(calc3); // 122 ("1" + 2 = "12" + 2 = 122)

// Other operators only work with numbers

let calc4 = 6 - "3";
console.log(calc4); // 3 (converts "3" to a number)

let calc5 = "6" / "2";
console.log(calc5); // 3 (converts both "6" and "2" into numbers)

// Numeric Conversion (Unary)

let x = 1;
console.log(+x); // 1 (no effect on numbers)

console.log(+true); // 1 (converts non-numbers into numbers)
console.log(+" "); // 0 (converts non-numbers into numbers)

let books = "2";
let pens = "3";

console.log(books + pens); // 23
console.log(+books + +pens); // 5

// Precedence Table of Operators

// 14 unary plus
// 14 unary negation
// 13 exponentitiation
// 12 multiplication
// 12 division
// 12 addition
// 11 subtraction
// 2 assignment

// unary operations are higher than binary and therefore performed first

// Modify-in-place

let n = 2;

n += 5; // (same as n = n + 5)
console.log(n); // 7

n *= 2; // (sames as n = n * 2)
console.log(n); // 14

let m = 2;

m *= 3 + 5; // (same as m *= 8, same as m = m * 8 )
console.log(m); // 16

// Increment and Decrement

let counter = 2;
++counter; // (same as counter = counter + 1)
console.log(counter); // 3

let counter2 = 2;
--counter2; // (same as counter = counter - 1)
console.log(counter2); // 1
