class Shape {
  name;
  height;
  width;
  constructor(name) {
    this.name = name;
  }

  calculateArea() {
    console.log(
      `Area of ${this.name} is ${this.height * this.width} sq. unit.`
    );
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super("Rectangle");
    this.height = length;
    this.width = width;
  }
}

const rectangle = new Rectangle(4, 6);
rectangle.calculateArea();
