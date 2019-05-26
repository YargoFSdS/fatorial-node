import {fatorial} from './fatorial'
const argv     = require('yargs').demandOption('num').argv

console.log("=== UM HEAD ===");
const num = argv.num

console.log(`O fatorial de ${argv.num} é igual a ${fatorial(argv.num)}`);