/*
Interface segregation principle (Princípio da segregação de Interface) -
os clientes não devem ser forçados a depender de types, interfaces ou membros
abstratos que não utilizam
*/
import { MemberCostumer } from './costumers';
import { FiftyPercentDiscount } from './discount';
import { Order } from './order';
import { Product } from './product';
import { ShoppingCart } from './Shopping-cart';

const costumer = new MemberCostumer(
  'emanuel.mtg.96@gmail.com',
  123123,
  'dishdfDFSF23@!q',
);
const cart1 = new ShoppingCart(new FiftyPercentDiscount(), costumer);
const order1 = new Order(cart1);

cart1.addItem(new Product('Terrazas', 220, 1));
cart1.addItem(new Product('Picanha', 65.77, 3));
cart1.addItem(new Product('Sal Gross', 12.47, 1));
cart1.removeItem('Picanha', 1);
order1.checkout();
console.log(order1.orderStatus);
console.log(cart1.total());
console.log(cart1.totalWithDiscount());
