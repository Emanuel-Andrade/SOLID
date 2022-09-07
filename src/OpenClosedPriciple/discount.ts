export abstract class Discount {
  protected discount = 0;
  calculate(price: number): number {
    return price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.15;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {
  protected readonly discount = 0;
}
