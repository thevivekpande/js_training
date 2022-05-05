// const person = {
//   name: "Vivek Pandey",
//   age: 23,
// };

// console.log(person);
// person.age = 22;
// console.log(person);

// Person
// name. age
// ** Tell his Bio - name+age*/
function person(name, age) {
  this.name = name;
  this.age = age;
  tellYourBio: function tellYourBio() {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
  }
  tellYourBio(name, age);
}

person("Vivek Pandey", 23);
