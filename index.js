class Polygon {
    constructor(sides) {
        this.sides = sides;
        this.count = this.sides.length;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((acc, cv) => acc + cv);
    }
}

class Triangle extends Polygon {
    get isValid() {
        return this.countSides === 3 
        && (this.sides[1] + this.sides[2]) > this.sides[0] 
        ? true : false;
    }
}

class Square extends Polygon {
    get isValid() {
        return this.countSides === 4 
        &&(this.sides[0] === this.sides[1]) 
        && (this.sides[1] === this.sides[2]) 
        &&(this.sides[2] === this.sides[3]) 
        ? true : false;
    }

    get area() {
        return Math.pow(this.sides[0], 2);
    }
}