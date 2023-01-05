class Vehicle {
  constructor(public color: string) {
    this.color = color;
  }
  private drive(): void {
    console.log("chugga chugga");
  }

  public startDrivingProcess(): void {
    this.drive();
  }
  protected honk(): void {
    console.log("beep");
  }
}

const car = new Vehicle("orange");
car.startDrivingProcess();
console.log(car.color);
