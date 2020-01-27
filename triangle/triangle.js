//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1
    this.side2 = side2
    this.side3 = side3;
    this.sides = [this.side1, this.side2, this.side3]
  }

  isEquilateral() {
      return this.isTriangle() && this.side1 === this.side2
      && this.side2 === this.side3;
  }

  isIsosceles() {
      return this.isTriangle() &&
      (this.side1 === this.side2 || this.side2 === this.side3
        || this.side1 === this.side3);
  }

  isScalene() {
    if(this.isTriangle()) {
      if(this.isEquilateral() || this.isIsosceles()) {
        return false;
      }
      return true;
    }
    return false;
  }

  isTriangle() {
    if(this.sides.includes(0)) {
      return false;
    }
    if(this.side1 + this.side2 < this.side3 ||
      this.side2 + this.side3 < this.side1 ||
      this.side1 + this.side3 < this.side2) {
        return false;
      }
      return true;
  }
}