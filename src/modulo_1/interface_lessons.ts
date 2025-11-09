// interface é usado para definir a estrutura (contrato) de uma classe, ela padroniza os retornos, atributos e metodos esperados.

// no TS é comum colocar o sufixo Inteface em uma interface
interface ProcessPaymentInterface {
  readonly taxRate: number;
  startPayment(amount: number): Promise<string>;
  confirmPayment(id: string): Promise<boolean>;
  cancelPayment(id: string): Promise<boolean>;
  getPaymentStatus(id: string): Promise<{ status: string }>;
}

// diferente de classes abstradas que pode ser implementada apenas uma por vez,
// podemos implementar várias interfaces na mesma classe
class PixPayment implements ProcessPaymentInterface {
  taxRate = 1;

  async startPayment(amount: number): Promise<string> {
    return Promise.resolve("123456789");
  }
  async confirmPayment(id: string): Promise<boolean> {
    return Promise.resolve(true);
  }
  async cancelPayment(id: string): Promise<boolean> {
    return Promise.resolve(false);
  }
  async getPaymentStatus(id: string): Promise<{ status: string }> {
    return Promise.resolve({ status: "confirmed" });
  }
}

class PaypalPayment implements ProcessPaymentInterface {
  taxRate = 10;

  async startPayment(amount: number): Promise<string> {
    return Promise.resolve("123456789");
  }
  async confirmPayment(id: string): Promise<boolean> {
    return Promise.resolve(true);
  }
  async cancelPayment(id: string): Promise<boolean> {
    return Promise.resolve(false);
  }
  async getPaymentStatus(id: string): Promise<{ status: string }> {
    return Promise.resolve({ status: "confirmed" });
  }
}
class MercadoPagoPayment {
  taxRate = 10;

  async startPayment(amount: number): Promise<string> {
    return Promise.resolve("123456789");
  }
  async confirmPayment(id: string): Promise<boolean> {
    return Promise.resolve(true);
  }
  async cancelPayment(id: string): Promise<boolean> {
    return Promise.resolve(false);
  }
  // async getPaymentStatus(id: string): Promise<{ status: string }> {
  //   return Promise.resolve({ status: "confirmed" });
  // }
}

// a tipagem de payment nesse caso, só aceitará classes com ProcessPaymentInterface implementada ou com mesma tipagem estrutural
const processPayment = async (payment: ProcessPaymentInterface) => {
  const idPayment = await payment.startPayment(100);
  console.log(`Payment started with id: ${idPayment}`);
  const status = await payment.getPaymentStatus(idPayment);
  console.log(`Payment status: ${status.status}`);
};

const pixPayment = new PixPayment();
const paypalPayment = new PaypalPayment();
const mercadoPayment = new MercadoPagoPayment();

// diferente do que a aula mostra, o MercadoPagoPayment ira funcionar corretamente porque o TS não checa tipagem nominal mas sim estrutural.
// para forçar o erro, é necessario remover um pedaço da estrutura
processPayment(pixPayment);
processPayment(paypalPayment);
processPayment(mercadoPayment);
export {};
