/**
 * array entries working like this when we call entries method that time array iterator 
 * object that contain key/value pairs for each index
 */

const ary = new Array('a', 'b', 'c', 'd');

for(const [index, value] of ary.entries()){
    console.log(`index - ${index}, value - ${value}`);
};