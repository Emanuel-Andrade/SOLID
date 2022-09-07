type Item = {
  name: string;
  price: number;
  quantity: number;
};

type orderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: Item[] = [];
  private _orderStatus: orderStatus = 'open';

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

  checkout(): void {
    this._orderStatus == 'open'
      ? (this._orderStatus = 'closed')
      : (this._orderStatus = 'open');
  }
}

const cart1 = new ShoppingCartLegacy();

cart1.addItem({ name: 'Terrazas', price: 190, quantity: 1 });
cart1.addItem({ name: 'Picanha', price: 40.0, quantity: 6 });
cart1.removeItem('Picanha', 1);
console.log(cart1);
console.log(cart1.total());
cart1.checkout();
console.log(cart1);
cart1.checkout();
console.log(cart1);
