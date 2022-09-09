import { Item } from './item';
export interface ShoppingCartProtocol {
  addItem(item: Item): void;
  removeItem(name: string, quantity?: number): void;
  removeQuantity(index: number, quantity: number): void;
  showCartItens(): Item[];
  total(): number;
  showCostumer(): string;
  totalWithDiscount(): number;
}
