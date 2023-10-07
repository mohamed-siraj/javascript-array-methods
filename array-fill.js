/**
 * fill() method
 * Array.fill() this method update array element without change array length 
 */

//example 1
const ary = [1, 2, 3, 4, 5];

console.log(ary.fill(10, 1, 3));
/**
 * result
 * [ 1, 10, 10, 4, 5 ]
 */

//example 2
const ary2 = [1, 2, 3, 4, 5];

console.log(ary2.fill(10, 1));

/**
 * result
 * [ 1, 10, 10, 10, 10 ]
 */