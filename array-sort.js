/**
 * sort() method
 * when we call sort method its sorting array default ascending order
 * Array.sort()
 */

const ary1 = new Array('March', 'Jan', 'Feb', 'Dec');

// before sorting
console.log(ary1);
//after sorting
console.log(ary1.sort());

/**
 * result
 * [ 'Dec', 'Feb', 'Jan', 'March' ]
 */


const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
];

//before sorting
console.log(items);

/**
 * we will sort 2 ways 
 * one using name & another using value
 */

/**
 * we should consider some point when we sort multi dimensional array
 * 
 * 1. a > b return 1 
 * 2. a < b return -1
 * 3. equal return 0
 */

/**
 * sort using name 
 */
const itemsResults = items.sort((a, b) => {
    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
});

//after sorting
console.log(itemsResults);

/**
 * sort using value
 */

const itemsResults1 = items.sort((a, b) => {
    return a.value > b.value ? 1 : a.value < b.value ? -1 : 0;
});

//after sorting
console.log(itemsResults1);