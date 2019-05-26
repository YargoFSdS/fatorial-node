"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fatorial_1 = require("./fatorial");
const argv = require('yargs').demandOption('num').argv;
console.log("=== UM HEAD ===");
const num = argv.num;
console.log(`O fatorial de ${argv.num} é igual a ${fatorial_1.fatorial(argv.num)}`);
