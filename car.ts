interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void; // a methid that returns a void which means nothing
}

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start(): void {
    console.log("Car engine started");
  }
}

const mycar = new Car("Toyota", "Corolla", 2022);

mycar.start();
