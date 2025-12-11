const accountId = 123456;
let accountEmail = "test@devops.in";
var accountPassword = 123456;
accountCity = "New Delhi"; // Implicit global variable

//accountId = 2 not allowed to change because it is declared using const

accountEmail = "sk@madeeasy.in"
accountPassword = "123456789"
accountCity = "Noida"
accountState = "Uttar Pradesh" // Implicit global variable  

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState]);


