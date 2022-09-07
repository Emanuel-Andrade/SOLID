/*
Liskov substitution principle (Princípio da substituição de Liskov) -
Se ϕ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então ϕ(y)
deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.

Mais simples ainda: Se meu programa espera um Animal, algo do tipo
Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
*/
import { FiftyPercentDiscount } from './discount';
import { Order } from './order';
import { Product } from './product';
import { ShoppingCart } from './Shopping-cart';

const cart1 = new ShoppingCart(new FiftyPercentDiscount());
const order1 = new Order(cart1);

cart1.addItem(new Product('Terrazas', 220, 1));
cart1.addItem(new Product('Picanha', 65.77, 3));
cart1.addItem(new Product('Sal Gross', 12.47, 1));
cart1.removeItem('Picanha', 1);
order1.checkout();
console.log(cart1);
console.log(order1.orderStatus);
console.log(cart1.total());
console.log(cart1.totalWithDiscount());
