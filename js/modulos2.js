/* **********     Curso JavaScript: 33. Módulos parte 2 ( import / export ) - #jonmircha     ********** */
import pass, {
  log10e,
  usuario,
  nombre,
  saludo,
  Comida,
  miObjeto,
} from "./constantes2.js";

import {
  areaCirculo as area,
  radioCirculo,
  diametroCirculo,
  perimetroCirculo,
} from "./aritmetica2.js";

console.log("**********************************");
console.log("Probando modulos 2:");
console.log("Logaritmo natiral de 2:", log10e);
console.log("Usuario:", usuario);
console.log("Variable por default:", pass);
console.log(nombre);
saludo();
let pizza = new Comida("Pizza", "Italiana");
console.log(`Has pedido la comida ${pizza.comida} y es de tipo ${pizza.tipo}`);
let hamburguesa = new Comida("Hamburguesa Molkas", "Mexicana");
console.log(
  `Has pedido la comida ${hamburguesa.comida} y es de tipo ${hamburguesa.tipo}`
);
console.log("A mi me encanta " + miObjeto.gustos[1]);

console.log("Area circulo:", area(3));
console.log("Radio circulo:", radioCirculo(4));
console.log("Diametro circulo:", diametroCirculo(2));
console.log("Perimetro circulo:", perimetroCirculo(1));
