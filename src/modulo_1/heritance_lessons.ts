export class User {
  constructor(public name: string, public age: number) {}
}

export class Manager extends User {
  constructor(name: string, age: number, public email: string) {
    // super é uma forma de acessar o contrutor pai, vinda do TS, cada linguagem OO tem seu metodo.
    // o construtor da classe filha leva o parametro novo, e o super agrega ao construtor da classe pai
    // super recebe sempre a mesma quantidade de argumentos que a classe pai
    super(name, age);
  }
  getReportEmployees(): void {
    console.log(`${this.name} get Reports Employees`);
  }
}

const manager = new Manager("John", 30, "email@email.com");
manager.getReportEmployees();

export class Admin extends Manager {
  getReportAdmin(): void {
    console.log(`${this.name} get admin report`);
  }
}

const admin = new Admin("Jane", 30);
admin.getReportEmployees();
admin.getReportAdmin();
