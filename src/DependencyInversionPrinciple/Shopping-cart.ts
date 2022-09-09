import { CostumerIdentification } from './interfaces/costumerProtocol';
import { Item } from './interfaces/item';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { DiscountProtocol } from './interfaces/discountProtocol';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: Item[] = [];
  private _discount: DiscountProtocol;
  private costumer: CostumerIdentification;

  constructor(
    private discount: DiscountProtocol,
    constumer: CostumerIdentification,
  ) {
    this._discount = discount;
    this.costumer = constumer;
  }

  addItem(item: Item): void {
    this._items.push(item);
  }

  removeItem(name: string, quantity?: number): void {
    if (quantity && !Number.isInteger(quantity)) return;
    this._items.map((item, index) =>
      item.name === name
        ? typeof quantity === 'number'
          ? this.removeQuantity(index, quantity)
          : this._items.splice(index, 1)
        : '',
    );
  }

  removeQuantity(index: number, quantity: number): void {
    this._items[index].quantity > quantity
      ? (this._items[index].quantity -= quantity)
      : this._items.splice(index, 1);
  }

  showCartItens(): Item[] {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price * next.quantity, 0)
      .toFixed(2);
  }

  showCostumer(): string {
    return (
      'Nome de usuário: ' +
      this.costumer.getName() +
      '. Número de identificação do usuário:' +
      this.costumer.getIDN()
    );
  }

  totalWithDiscount(): number {
    return +(this.total() - this._discount.calculate(this.total())).toFixed(2);
  }
}
