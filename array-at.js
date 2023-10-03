/**
 * At() method
 * array.At();
 */

/**
 * At method working like this to find particular index value
 */

const ary = [1, 2, 3, 4, 5];

// positive value counting 0-n from left to right
const index1 = 3;

console.log(`array values ${ary}. index 3,  value is ${ary.at(index1)}`);

//negative value counting reverse 1-n 
const index2 = -3;

console.log(`array values ${ary}. index -3,  value is ${ary.at(index2)}`);