// O(n)
const array = [1, 3, 5, 7, 83, 3, 2, 6, 9, 78, 43, 0];
let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count++;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 9))
console.log('count =', count)