const accountId = 1234567;
let accountEmail = "sacchi@gmail.com";
var accountCity = "Delhi";
accountName = "Sacchi";
let accountState;

// accountId = 456789; // const value cannot be changed 
console.log(accountId);

accountEmail = "aditi@gmail.com";
accountCity = "Hyderabad";
accountName = "Aditi";
console.table([accountId, accountEmail, accountCity, accountName, accountState]);
/*
prefer not to use 'var'
because of issues in BLOCK scope and FUNCTIONAL scope
*/
// let and const have Block scope
// var has Global scope
