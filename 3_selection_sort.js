// O(n^2)

const arr = [3, 6, 1, -1, 21, 0, -23, 59, 5, 8, 101, 6,7,8];
let count = 0;

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
      count++;
    }
    let tmp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = tmp;
  }
  return array;
}

console.log(selectionSort(arr));
console.log("count=", count);
