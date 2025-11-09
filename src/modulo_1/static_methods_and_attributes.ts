class User {
  static count = 0; // estáticos não pertencem a instancia do construtor mas a classe em si

  constructor(public name: string) {}

  static incrementCount() {
    this.count++;
  }
}

const user = new User("FILÒOO");
console.log(user.name);

// para acessar um metodo ou atributo estatico referenciamos a propria classe

const user2 = new User("Filloooo");
console.log(User.count);
User.incrementCount();
console.log(User.count);
User.incrementCount();
console.log(User.count);
User.incrementCount();
console.log(User.count);
User.incrementCount();
console.log(User.count);

export {};
