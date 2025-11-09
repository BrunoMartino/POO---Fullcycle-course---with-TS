export class User {
  constructor(
    private name: string,
    private age: number,
    private address: Address[]
  ) {}

  public showAddress(): void {
    this.address.forEach((address) => {
      console.log(
        `${this.name}, mora em ${address.street}, número ${address.number}`
      );
    });
  }
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const user = new User("Beagle Bolinha", 12, [
  new Address("Main St", 123),
  new Address("Second St", 456),
  new Address("Third St", 789),
]);
