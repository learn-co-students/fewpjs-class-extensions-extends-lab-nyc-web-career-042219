// Your code here
class Polygon {

  constructor (side){
    this.sides = side
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((a,b) => a+b)
  }

}


class Triangle extends Polygon{
  get isValid(){
    if ((this.sides[1] + this.sides[2]) > this.sides[0]){
      return true;
    }else {
      return false;
    }
  }

}

class Square extends Polygon{

  get area(){
    return this.sides[1]**2
  }

  get isValid(){
    if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] === this.sides[3]){
      return true
    }else {
      return false
    }


  }

}
