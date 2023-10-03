/**
 * copyWithin() method
 * this method copy index value replace in same array without change array length
 * Array.copyWithin()
 */

const ary1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];


console.log(ary1.copyWithin(2, 6));
/**
 * result
 * 
 * [1, 2, 7, 8, 9, 6, 7, 8, 9]
 * 
 */

console.log(ary1.copyWithin(5, 7, 8));
/**
 * result
 * 
 * [1, 2, 7, 8, 9, 8, 7, 8, 9]
 * 
 */