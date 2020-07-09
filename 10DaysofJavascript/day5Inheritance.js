class Rectangle {
  constructor(w, h) {
      this.w = w;
      this.h = h;
  }

  area() {
    return(this.w * this.h);
  };

}

class Square extends Rectangle {
  constructor(side) {
      super(side);
      this.h = side;
      this.w = side;
  }
};

let rectangle = new Rectangle(8,5);
let sq = new Square(5);

console.log(rectangle.area());
console.log(sq.area());