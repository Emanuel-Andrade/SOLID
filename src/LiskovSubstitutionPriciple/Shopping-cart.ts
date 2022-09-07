import { Discount } from './discount';
import { Item } from './interfaces/item';

export class ShoppingCart {
  private readonly _items: Item[] = [];
  private _discount: Discount;

  constructor(private discount: Discount) {
    this._discount = discount;
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

  totalWithDiscount(): number {
    return +(this.total() - this._discount.calculate(this.total())).toFixed(2);
  }
}
