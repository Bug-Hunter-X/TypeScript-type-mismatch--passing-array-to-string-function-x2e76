function greeter(person: string): string {
  return "Hello, " + person;
}

function isString(value: any): value is string {
  return typeof value === 'string';
}

let user = ["Jane", "Doe"];

if (isString(user)) {
  console.log(greeter(user));
} else {
  console.log("Invalid input: Expected string, got array");
}
//Alternative solution
let user2 = "Jane Doe";
console.log(greeter(user2));