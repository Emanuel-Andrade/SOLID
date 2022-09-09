/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.
Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.
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
