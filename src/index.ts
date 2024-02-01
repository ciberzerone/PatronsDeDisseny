// index.ts
// index.ts

import { Creator, ConcreteCreator1, ConcreteCreator2 } from "./factory";

function clientCode(creator: Creator) {
    console.log(creator.someOperation());
}

console.log('App: Lanzada con ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Lanzada con ConcreteCreator2.');
clientCode(new ConcreteCreator2());
