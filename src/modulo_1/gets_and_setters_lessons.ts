class User {
  constructor(
    private id: number,
    private _name: string,
    private _email: string,
    private _password: string,
    private _createdAt: Date,
    private _updatedAt: Date
  ) {}
  //usamos o underline para sinalizar para o TS valores que podem ser modificados ou acessados via get e set.
  // a vantagem de usar get e sets no construtor é a possibilidade de validar dados antes de processá-los, garantindo coerencia dos dados
  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }
}

const user = new User(
  1,
  "Beagle Careca",
  "bigo@bigo.com",
  "pass123",
  new Date(),
  new Date()
);

console.log(user.name);
user.name = "Beagle Bolinha";
console.log(user.name);

export {};
