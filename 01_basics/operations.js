let value = 36;
let negValue = -value;
// console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(2%5);
// console.log(16%2);

// modulus operations:
/*remainder with positive dividend
13 % -5 == 3
remainder with negative dividend
-13 % 5 == -3
remainder with NaN
NaN % 3 == NaN
remainder with infinity
Infinity % 5 == NaN
5 % Infinity == 5
Infinity % Infinity == NaN 
*/
let str1 = "hello";
let str2 = " World";
let finalStr = str1 + str2;    //hello World
// console.log(finalStr);
// let resultStr = str1.concat(str2);             //methods in strings
// console.log(resultStr);
// console.log("1" + 2);
// console.log(1 + "2");
let string1 = "1" + 2 + 2;    //the first value is taken as reference if it is a string then the entire value is treated as string
let string2 = 1 + 2 + "2";    //here the first two values are numbers so firstly the operation is being performed then it is treated as string
// console.table([string1 , string2]);
// console.table([typeof(string1), typeof(string2)]);

// console.log(+true);
// console.log(+"");  //+ is used for conversion 
// console.log(+"-1");
let gameCounter = 100;
// console.log(gameCounter);
// console.log(gameCounter++);  //postfix increment
// console.log(++gameCounter);  //prefix increment

let x = 3;
let y = x++;
// console.log(`x: ${x} , y: ${y}`);

//Comparison operators: > < >= <= != ==

//comparison in same dataype  
// console.log(5 == 5);
// console.log(4>3);
// console.log(4<3);
//console.log(4>=3);
// console.log(4<=3);
// console.log(5 != 5);

//comparison in different datatype
// console.log("2" == 2); //true    //string value gets converted to number and then comparison takes place
// console.log("3" >= 2); //true
// console.log(null > 0);  //false
// console.log(null == 0); //false
// console.log(null >= 0);  //true

/* console.log(null == 0); //false
Reason:  JavaScript treats null in a special way.
 According to the ECMAScript specification:
null is only loosely equal to undefined and not equal to any other value, including numbers.

console.log(null == undefined);  //true
*/

/* console.log(null >= 0);  //true
Reason:  Type Coercion of null:

When using relational operators (like >=, <=, >, <), JavaScript attempts to coerce null to a number.
In numeric contexts, null is converted to 0. This is different from how null behaves in equality comparisons (null == 0 is false), but in relational comparisons, the conversion to a number occurs.
*/

//strict check: not only values, datatypes are also checked
//console.log("2" === 2);    //false