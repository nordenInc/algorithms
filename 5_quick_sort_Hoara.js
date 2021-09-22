// O(n log n)

const arr = [3, 5, 7, 10, -3, 4, 7, 13, 30, 21, 0];
let count = 0;

function quickSort(array) {
  count++;
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  const less = [];
  const greater = [];
  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue;
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(arr));
console.log("count = ", count);
