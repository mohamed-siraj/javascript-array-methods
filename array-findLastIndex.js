/**
 * findLastIndex()
 * Array.findLastIndex() method find index when match any condition but findLastIndex method 
 * find index from reverse order
 */

//example 1 - find index greater then 50

const array1 = [5, 12, 50, 130, 44];

const result = array1.findLastIndex((value) => value > 50);

console.log(`Index - ${result}`);

/**
 * result
 * Index - 3
 */
