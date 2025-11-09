export class User {
  constructor(public name: string, public age: number) {}

  getReportsEmployees(): void {
    console.log(`${this.name} getReportsEmployees`);
  }
}

export class Manager extends User {}

export class Employee extends User {
  // o TS tem uma funcao nativa de overwritering que sobreescreve o metodo ja existente enviando as informações novas
  // isso faz parte dos conceitos de polimorfismo, que é quando RESPEITANDO O metodo e a assinatura dele, nós alteramos o output - resultado esperado
  // em outras linguagems como Java e C# isso tbm é presente, mas com uma tag sinalizando.
  getReportsEmployees(): void {
    console.log(`${this.name} getReportsEmployees`);
  }
}

export class Admin extends User {
  getReportsAdmins(): void {
    console.log("getReportsAdmin");
  }
}
