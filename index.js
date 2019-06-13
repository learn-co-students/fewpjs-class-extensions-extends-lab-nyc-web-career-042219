class Polygon {
	constructor(array) {
		this.array = array;
	}

	get countSides(){
		return this.array.length;
	}

	get perimeter(){
		let counter = 0;
		this.array.forEach(side => counter += side);
		return counter;
	}
}

class Triangle extends Polygon {
	get isValid(){
		if (this.array[0] + this.array[1] > this.array[2] && this.array[1] + this.array[2] > this.array[0] && this.array[2] + this.array[0] > this.array[1]){
			return true;
		}
		else {
			return false;
		}
	}
}

class Square extends Polygon {
	get isValid(){
		if (this.countSides > 4){ return; }
		if (this.array[0] === this.array[1]&&this.array[0]===this.array[2]&&this.array[0]===this.array[3]){
			return true;
		} else {
			return false;
		}

	}

	get area(){
		if (this.isValid){
			return this.array[0] ** 2;
		} else {
			return false;
		}
	}
}
