
import { greet } from './greet.js';
import { add, subtract, pi } from './math.js';
import { capitalize } from './utils.js'; 

console.log("Using math module:");
console.log(`Add 5 + 3 = ${add(5, 3)}`);
console.log(`Subtract 10 - 4 = ${subtract(10, 4)}`);
console.log(`The value of pi is: ${pi}`);

console.log("\nUsing greet module:");
const user = "hosam";
console.log(greet(capitalize(user)));  // Bonus: greeting + capitalizing the name
