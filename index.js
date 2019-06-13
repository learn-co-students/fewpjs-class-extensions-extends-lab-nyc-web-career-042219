class Polygon {
    constructor(intArray) {
        this.intArray = intArray;
    }

    get countSides() {
        return this.intArray.length;
    }

    get perimeter() {
        return this.intArray.reduce((count, side) => count + side, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        return (this.perimeter - this.intArray[0] > this.intArray[0] 
            && this.perimeter - this.intArray[1] > this.intArray[1]
            && this.perimeter - this.intArray[2] > this.intArray[2])
            ? true : false
    }
}

class Square extends Polygon {
     get isValid() {
        return (this.intArray.every(int => int === this.intArray[0])) ? true : false
     }

     get area() {
         return this.intArray[0] ** 2;
     }
}