//const amigos_vecinos = require('./export'); //Es la vieja forma de importar archivos

import amigos_vecinos, { vecinos, partners, fnFlecha, fn } from "./export.mjs"; //Si se usa import sin un package.json que tenga un type:module no funcionará
//debe cambiar la extensión de los archivos que importan y exportan a .mjs

// console.log(amigos_vecinos);
// console.log(vecinos);
console.log(partners);

fnFlecha();
fn();