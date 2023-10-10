/**
 * findIndex()
 * Array.findIndex() method find index to match any condition 
 */

//example 1 - find index to match greater then 20 
const array1 = [5, 12, 8, 130, 44];

const result = array1.findIndex((value) => value > 20);

console.log(`index - ${result}`);
/**
 * result
 * index - 3
 */