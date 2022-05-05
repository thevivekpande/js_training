function CalculateArea(name) {
  this.name = name;
  this.getArea = function () {
    console.log(`Area of ${this.name} is ${this.height * this.width} sq. unit`);
  };
}

// Rectangle
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
}
Rectangle.prototype = new CalculateArea("Circle");
const rectangle = new Rectangle(3, 4);
rectangle.getArea();

// Square
function Square(side) {
  this.height = side;
  this.width = side;
}
Square.prototype = new CalculateArea("Square");
const square = new Square(4);
square.getArea();

// Circle
function Circle(radius) {
  this.height = radius * 3.14;
  this.width = radius;
}
Circle.prototype = new CalculateArea("circle");
const circle = new Circle(4);
circle.getArea();

// Triangle
function Triangle(base, height) {
  this.height = height;
  this.width = 0.5 * base;
}
const triangle = new Triangle(4, 6);
triangle.__proto__ = new CalculateArea("Triangle");
triangle.getArea();
