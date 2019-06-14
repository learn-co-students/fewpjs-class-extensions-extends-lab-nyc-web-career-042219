class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((count, side) => count + side, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        return (this.perimeter - this.sides[0] > this.sides[0] 
            && this.perimeter - this.sides[1] > this.sides[1]
            && this.perimeter - this.sides[2] > this.sides[2])
            ? true : false
    }
}

class Square extends Polygon {
     get isValid() {
        return (this.sides.every(int => int === this.sides[0])) ? true : false
     }

     get area() {
         return this.sides[0] ** 2;
     }
}