// Data types
// 1 - String => Sequence of characters that responste a text value
console.log("ahmed karam ali");

// 2 - Number
console.log(typeof 55);
console.log(typeof 5.5);
console.log(typeof "32");
console.log("32" === 32);
console.log(32 === 32);
console.log(Number(32) === 32);
console.log(Number("unicorn"));
console.log(Number("undefined"));
// 3 - boolean = > ture or false
console.log(typeof true);
console.log(typeof false);

// 4 - null => object
console.log(typeof null);
console.log(null === "object");

// 5 - undefined
let x; // x no assign vlaue
console.log(typeof undefined);
console.log(`x is value = ${x}`); //logs "x's value is undefined"

// 6 - object
console.log(typeof { name: "ahmed", age: "23", city: "sohag" });

// 7 - Array = object
console.log(typeof [23, "ahmed ", 454, 6]);

// variables
// syntax
// var , let , const  variableName = valu

// 1 - var : redeclare
var a = 4;
var a = 5; //redeclare
console.log(a);

// 2 - let : no redeclare
let nam = "ahmed";
console.log(nam);

// 3 - const : no redeclare
const y = 56;
console.log(y);

// Escape characters
// \" \" \' \$ \* \n \ f \t \b
console.log('ahmed karam "ali"');

// concatenation
// 1- concatenation (+)
let name1 = "ahmed";
let name2 = "karam";
console.log(name1 + " " + name2);

// 2 - Array = join()
let l = [3, 5, 6, 7];
let z = ["ahmed", "karam", "ali"];
console.log([l, z].join(""));
console.log(["a", "b", "c", "d"].join(" & "));

// 3 - String#concat()
const str1 = "hello";
const str2 = str1.concat(" ", "Ahmed");
console.log(str2);
console.log("1- ".concat("Hello", " ", "World"));

const str = "Values: ";
const str3 = str.concat("42", " ", "Null");
console.log(str3); // 'Values: 42 null'
