// ---Abstracion---
// freeze()
// preventExtensions()
// seal()

const person = {
  name: "John Doe",
  age: 25,
};
console.log(Object.getOwnPropertyDescriptor(person));
console.log(person);
Object.seal(person);
person.name = "alex";
person.email = "alex@email.com";
console.log(Object.getOwnPropertyDescriptor(person));
