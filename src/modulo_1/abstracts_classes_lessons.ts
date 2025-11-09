//Ao definir uma classe como abstract indicamos que ela não pode ser instanciada diretamente
// isso protege abstrações de serem usadadas diretamente, e obriga que só sejam acessadas atraves de suas classes extendidas
// classes e atributos abstratos são classe e atributos sem valores definidos, mas que padronizam metodos e retornos esperados
// usamos abstrações para diminuir a repetição de código, e a segurança de retornos, ja que isso obriga a respeitar os contratos da classe durante o desenvolvimento

abstract class Payment {
  protected abstract tax: number; //5% tax

  constructor(
    public amount: number,
    public date: Date,
    public description: string
  ) {}

  getPaymentInfo(): string {
    return `Payment of ${this.amount} on ${this.date}: ${this.description} `;
  }

  processPayment(): void {
    const newAmount = this.amount + this.amount * this.tax;

    console.log(
      `Payment of ${this.amount} -> ${newAmount} (tax: ${this.tax}) on ${this.date}: ${this.description} `
    );
  }

  abstract calcIof(): number;
}

class PaymentPix extends Payment {
  tax = 0.01;
  calcIof(): number {
    return this.amount * this.tax;
  }
}
class PaymentCreditCard extends Payment {
  tax = 0.1;
  calcIof(): number {
    return this.amount * this.tax;
  }
}
class PaymentDebitCard extends Payment {
  tax = 0.05;
  calcIof(): number {
    return this.amount * this.tax;
  }
}

const pixPayment = new PaymentPix(100, new Date(), "Payment in Pix");
pixPayment.processPayment();

export {};
