// Abstractions
class A {
  static someField = 10;
  #p1;
  constructor(p1, p2) {
    // private
    this.#p1 = p1;
    this.p2 = p2;
  }

  // Private methods: not accessible from outside world
  #showFields() {
    console.log(
      `#p1 : ${this.#p1}, p2 : ${this.p2}, p1 : ${this.p1}, someField : ${
        this.someField
      }`
    );
  }

  static someMoreDetails() {
    console.log(`somefield = ${this.someField}`);
  }

  // Encapsulations
  someOtherFunction() {
    // this.someMoreDetails();
    this.#showFields();
  }
}

const obj1 = new A(1, 2);
console.log(Object.getOwnPropertyDescriptors(obj1));
console.log(obj1.someOtherFunction());
A.someMoreDetails();
obj1.p1 = 3;
console.log(Object.getOwnPropertyDescriptors(obj1));
console.log(obj1.someOtherFunction());
