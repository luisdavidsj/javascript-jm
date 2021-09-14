/* **********     Curso JavaScript: 33. Módulos ( import / export ) - #jonmircha     ********** */
import saludar, { Saludar, PI, usuario } from "./constantes.js";
import { aritmetica as calculos } from "./aritmetica.js";

console.log("Archivo modulos.js");
console.log(PI, usuario);
//console.log(aritmetica.sumar(3, 4));
console.log(calculos.sumar(3, 4));
console.log(calculos.restar(3, 4));
saludar();
let saludo = new Saludar(1, "A");
saludo;
//Mandando a llamar una clase que recibe 2 argumentos
let saludo2 = new Saludar(2, "B");
saludo2;
