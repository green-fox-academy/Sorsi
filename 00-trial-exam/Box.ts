// Create a class that represents a cuboid:
// It should take its three dimensions as constructor parameters (numbers)
// It should have a method called `getSurface` that returns the cuboid's surface
// It should have a method called `getVolume` that returns the cuboid's volume

class Cuboid {
  height: number;
  width: number;
  length: number;

  constructor(a: number, b: number, c: number) {
    this.height = a;
    this.width = b;
    this.length = c;
  }

  public getSurface(): number {
    let result1 = 2 * (this.height * this.width + this.height * this.length + this.width * this.length);
    return result1;
  }

  public getVolume(): number {
    let result2 = this.height * this.width * this.length;
    return result2;
  }
}

let cuboid = new Cuboid(10, 70, 40)

console.log(cuboid.getVolume());
console.log(cuboid.getSurface());