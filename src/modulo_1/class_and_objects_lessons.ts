class User {
  // private impede que seja alterado, se não for dentro da própria classe
  // protected aceita mudança vinda desta classe e das classes extendidas
  private name: string;
  private age: number;
  private weight: number;

  constructor(name: string, age: number, weight: number) {
    this.name = name;
    this.age = age;
    this.weight = weight;

    console.log(
      `Ola, meu nome eh ${this.name}, tenho ${this.age} anos e peso ${this.weight}kg`
    );
  }
  // encapsular metodos dentro da propria classe garante a integridade dos objetos na hora de salvar no banco
  public changeAge(newAge: number): void {
    if (newAge > 0 && newAge < 120) {
      throw new Error("Idade invalida");
    }
    this.age = newAge;
  }
}

const user = new User("Beagle Bolinha", 18, 80);

console.log(user);
