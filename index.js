// Make flat an array (without flat / lodash.flatten)
function flatArray(arrayToFlat) {
  let flatted = [];
  arrayToFlat.forEach(element => {
    Array.isArray(element) ?
      flatted = flatted.concat(flatArray(element))
    :
      flatted.push(element);
  })
  return flatted;
}

// TEST
const array0 = [1, [2, 3]];
const array1 = [1, [2, 3], [[[4],[5]],[[6]]]];
const array2 = [1, [[[[[[[[[2, 3], [ 4, 5, 6], [[[7],[8]],[9]]]]]]]]]],[10]];
const array3 = [1];
const array4 = [];

console.log(flatArray(array0));
console.log(flatArray(array1));
console.log(flatArray(array2));
console.log(flatArray(array3));
console.log(flatArray(array4));