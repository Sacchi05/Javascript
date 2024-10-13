let score = "78";
// console.log(typeof score);
// console.log(typeof(score));
// datatype is specified in lower case when tested through typeof
// for conversion start with upper case

let numScore = Number(score);
// console.log(numScore);
// console.log(typeof(numScore));

let marks = "45abc";
// console.log(typeof marks);
let numMarks = Number(marks);
// console.log(numMarks);       //NaN => Not a Number ; typeof(NaN) = number
// console.log(typeof(numMarks));

// let isLoggedIn = true;
// console.log(typeof(isLoggedIn));
// let numIsLoggedIn = Number(isLoggedIn);
// console.log(typeof(numIsLoggedIn));
// console.log(numIsLoggedIn);

let isLoggedIn = "";
// console.log(typeof(isLoggedIn));
let isLoggedOut = "Sacchi";
// console.log(typeof(isLoggedOut));

let numIsLoggedIn = Boolean(isLoggedIn);
// console.log(numIsLoggedIn);
let numIsLoggedOut = Boolean(isLoggedOut);
// console.log(numIsLoggedOut);

/*conversions in datatypes: 
"78" => 78
"45abc" => NaN
true => 1 | false => 0  (and vice versa)
"" => false
"sacchi" => true
*/
let num = 56;
let stringNum = String(num);
// console.log(stringNum);
// console.log(typeof(stringNum));

let days = null;
console.log(typeof(days));
let months = undefined;
console.log(typeof(months));
let numDays = Number(days);
let numMonths = Number(months);
console.table([numDays , numMonths]);
/*
null => 0
undefined => NaN
*/