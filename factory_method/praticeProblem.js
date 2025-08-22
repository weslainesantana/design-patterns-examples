// Interface
class PaymentMethod {
  pay(amount) {
    throw new Error("Método pay() precisa ser implementado");
  }
}

// Implementações concretas
class DebitCard extends PaymentMethod {
  pay(amount) {
    console.log(`Pagando com cartão de débito no valor de ${amount}`);
  }
}

class CreditCard extends PaymentMethod {
  pay(amount) {
    console.log(`Pagando com cartão de crédito no valor de ${amount}`);
  }
}

// Fábrica para instanciar o método correto
class PaymentFactory {
  static create(type) {
    switch (type) {
      case "debit card":
        return new DebitCard();
      case "credit card":
        return new CreditCard();
      default:
        throw new Error("Método de pagamento não suportado");
    }
  }
}

// Código do cliente
function main() {
  const type = "credit card";
  const payment = PaymentFactory.create(type);

  payment.pay("R$ 500,00");
}

main();
