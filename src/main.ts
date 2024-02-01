// main.ts

// Importar las clases Factory
import { ConcreteCreator1, ConcreteCreator2 } from "./factory";
import { Creator } from "./factory";

// Esta función ejecuta el código del cliente utilizando el objeto creator.
// El cliente no conoce la clase concreta de un creator con el que trabaja.
function clientCode(creator: Creator) {
    // ...
    console.log('Client: No conozco la clase del creator, pero aún funciona.');
    console.log(creator.someOperation());
}

// Aplicación elige el tipo de creator dependiendo de la configuración o el entorno.
console.log('App: Lanzada con ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Lanzada con ConcreteCreator2.');
clientCode(new ConcreteCreator2());
