/**
 * concat() method
 * array concat working like this to merge two or more arrays 
 * Array.concat()
 */

const ary1 = new Array('a', 'b', 'c');
const ary2 = new Array('d', 'e', 'f');

/**
 * result.....
 */

const ary3 = ary1.concat(ary2);

console.log(ary3);

/**
 * and we can merge two or more arrays using spread operator 
 */

const ary4 = [...ary1, ...ary2];

console.log(ary4);