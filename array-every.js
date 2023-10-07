/**
 * every() method
 * Array.every()
 * 
 * every method thats work as an loop concept. that method get every array element to the test & 
 * if test success or failure that is return boolean value
 * 
*/

const ary = [1, 30, 39, 29, 10, 13];

/**
 * call every method
 */
const result1 = ary.every((element) => element < 40);
console.log(result1);
/**
 * result 
 * 
 * true
 */
