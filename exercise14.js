// let passowrd ;
// do {
//   password = prompt("Enter a password with at least 6 characters:");
// } while (password !> 10);
// console.log("Password accepted.");

let password;

do {
  password = prompt("Enter a password greater than 10:");
} while (password <= 10);
console.log("You entered:", password);
