// Product
class Car {
  constructor(brand, model, year, engine, color, gps) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engine = engine;
    this.color = color;
    this.gps = gps;
  }

  showDetails() {
    console.log(
      `${this.year} 
      ${this.brand} 
      ${this.model} 
      - Motor: ${this.engine}, 
      Cor: ${this.color}, 
      GPS: ${this.gps ? "Sim" : "Não"}`
    );
  }
}

// Builder
class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setBrand(brand) {
    this.car.brand = brand;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setYear(year) {
    this.car.year = year;
    return this;
  }

  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  setColor(color) {
    this.car.color = color;
    return this;
  }

  setGPS(gps) {
    this.car.gps = gps;
    return this;
  }

  build() {
    return this.car;
  }
}

// Director → monta configurações pré-definidas
class CarDirector {
  static familyCar() {
    return new CarBuilder()
      .setBrand("Toyota")
      .setModel("Yaris")
      .setYear("2022")
      .setEngine("2.0")
      .setColor("Prata")
      .setGPS("Sim")
      .build();
  }

  static sportCar() {
    return new CarBuilder()
      .setBrand("Chevrolet")
      .setModel("Corvette")
      .setYear("2015")
      .setEngine("V8")
      .setColor("Azul")
      .setGPS("Não")
      .build();
  }

  static superCar() {
    return new CarBuilder()
      .setBrand("Bugatti")
      .setModel("Chiron")
      .setYear("2023")
      .setEngine("V16")
      .setColor("Preto")
      .setGPS("Não")
      .build();
  }
}

// Uso
const car01 = CarDirector.familyCar();
const car02 = CarDirector.sportCar();
const car03 = CarDirector.superCar();
const myCar = new CarBuilder().setGPS("Sim").build();

car01.showDetails();
car02.showDetails();
car03.showDetails();
myCar.showDetails();