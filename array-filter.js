/**
 * filter();
 * Array.filter() method filter array element & return new array
 */

//example 1 - get later greater then 6 
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result1 = words.filter((word) => word.length > 5);

console.log(result1);
/**
 * result
 * [ 'exuberant', 'destruction', 'present' ]
 */

//example 2 - get all small value less then 10
const example2 = [12, 5, 8, 130, 44];

const result2 = example2.filter((example) => example < 10 );

console.log(result2);
/**
 * result 
 * [ 5, 8 ]
 */

//example 3 - Find all prime numbers in an array
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function FindPrimeNumber(num){
    for(let i = 2; num > i; i++){
        if(num % 2 === 0) 
            return false
    }

    return num > 1;
}

console.log(array.filter(FindPrimeNumber));
/**
 * result
 * [2,  3,  5, 7, 9, 11, 13]
 */

//example 4 - Filtering invalid entries from JSON
const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
];

function checkCorrectObject(obj){
    if(Object.keys(obj).length !== 0 &&  Number.isFinite(obj?.id)){
        return true;
    }
}

console.log(arr.filter(checkCorrectObject));
/**
 * result
 * [ { id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 } ]
 */