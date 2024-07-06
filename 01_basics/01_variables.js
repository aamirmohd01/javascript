const accountId = 144453
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Bengaluru"
let accountState;
// accountId = 2 // not allowed

accountEmail = "abc1@gmail.com"
accountPassword = "2346"
accountCity = "Patna"

console.log(accountId);
/*
prefer not to  use var
because of issue of scope 
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
