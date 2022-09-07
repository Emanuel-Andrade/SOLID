export abstract class Discount {
  abstract calculate(price: number): number;
}

export class FiftyPercentDiscount extends Discount {
  calculate(price: number): number {
    return price * 0.15;
  }
}

export class TenPercentDiscount extends Discount {
  calculate(price: number): number {
    return price * 0.1;
  }
}

export class NoDiscount extends Discount {
  calculate(price: number): number {
    return price - price;
  }
}
