/**
 * toSorted() method
 * Array.sorted();
 * 
 * this method working smiler sort() method. but toSorted() method created instance of the array and return new sorted array element 
 * 
 * NOTE : This is new method. it iis not supported with nodejs. it will work only browser
 */

const ary1 = new Array('March', 'Jan', 'Feb', 'Dec');

// before sorting
console.log(ary1);
//after sorting
const sorted = ary1.toSorted();
console.log(sorted);