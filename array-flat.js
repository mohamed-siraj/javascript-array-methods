/**
 * flat();
 * Array.flat()
 * this method working to concat array and sub arrays
 */

const arr1 = [1, 2, [3, 4]];
const arr2 = [1, 2, [3, 4, [5, 6]]];

//example arr1
console.log(arr1.flat());
/**
 * result
 * [1, 2, 3, 4];
 */

//example arr2 - 1
console.log(arr2.flat());
/**
 * result
 * [1, 2, 3, 4, [5, 6]];
 */

//example arr2 - 2
console.log(arr2.flat(2));
/**
 * result
 * [1, 2, 3, 4, 5, 6];
 */

//example arr2 - 3
console.log(arr2.flat(Infinity));
/**
 * result
 * [1, 2, 3, 4, 5, 6];
 */