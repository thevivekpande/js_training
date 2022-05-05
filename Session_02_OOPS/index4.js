const name = "Vivek";
this.name1 = "Pandey";
function printName() {
  this.name1 = "Vivek Pandey";
  //   console.log(this);
  console.log(this.name1);
}
console.log(this.name1);
printName();

function printName1() {
  console.log(this.name);
}
const Person = {
  name: "Alex",
};
printName1.call(Person);
const p1 = printName1.bind(Person)();
// p1.printName1();
