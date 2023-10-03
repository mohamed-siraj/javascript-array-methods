/**
 * array constructor
 * new Array();
 */

/**
 * array constructor working like creating array object
 */

const ary = new Array(
    {firstName : "Mohamed", lastName : "Siraj"},
    {address : 'Srilanka', phone : '94756595259'}
);

/**
 * result of array
 */
console.log(ary);

// [
//     { firstName: 'Mohamed', lastName: 'Siraj' },
//     { address: 'Srilanka', phone: '94756595259' }
// ]


/**
 * array length
 */
console.log(ary.length);

// 2


/**
 * we can check array empty or not
 */

console.log(1 in ary);

// true or false

/**
 * check empty arry
 */

const emptyAry = new Array();

console.log(emptyAry);

// []

console.log(0 in emptyAry);

// false