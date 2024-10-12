"use script"; //treat all JS code as per the newer version
// by default now JS engine treat the code as per the newer version only

// Javascript Engine: it is a computer program that executes Javascript code and convert it into computer understandable language.
// Browsers have inbuilt Javascript engines which help them to understand and interpret Javascript code.

// alert(3+3);  //we are using node.js not browser


/* datatypes in Javascript:
primitive datatypes:-
1. NUMBER => 2^64 - 2^53 + 3  //NaN: Not a Number //it also contains +Infinity & -Infinity ; +0 & -0; finite number ranging from 2^64 - 2^53

2. STRING => "Hello" //it can be enclosed in single quotes or double quotes
maximum length of string datatype: 2^53 - 1;

3. BOOLEAN => true/false
4. NULL => null //standalone value  //exactly one value
5. UNDEFINED => undefined // any variable that has not been assinged any value has datatype as undefined  //exactly one value
6. BIGINT => for very large values
7. SYMBOL => unique and immutable value


8. OBJECT => collection of key value pairs
9. ARRAY => collection of values in a sequence
*/
/*
10. FUNCTION => function(){} //it is a block of code which can be executed multiple times
11. REGEX => /Hello/ //it is used for pattern matching
*/
console.log(typeof null);   // typeof: object
console.log(typeof undefined);    //typeof: null
