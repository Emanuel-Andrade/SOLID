import { orderStatus } from './interfaces/orderStatus';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';

export class Order {
  private _orderStatus: orderStatus = 'open';

  constructor(private readonly cart: ShoppingCartProtocol) {}

  get orderStatus(): orderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    console.log(this.cart.showCostumer());
    if (this.cart.showCartItens().length == 0)
      return console.log('Seu carrinho de compras está vazio!');
    this._orderStatus == 'open'
      ? (this._orderStatus = 'closed')
      : (this._orderStatus = 'open');
  }
}
