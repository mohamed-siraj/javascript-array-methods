/**
 * findLast()
 * Array.findLast() method find one element from the array list. but this findLast method finding from reverse order
 */

//example 1 - find greater then 20

const array1 = [5, 12, 50, 130, 44];

const result = array1.findLast((value) => value > 20);

console.log(result);
/**
 * result 
 * 44
 */
