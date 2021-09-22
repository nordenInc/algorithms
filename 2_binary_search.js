// O(logn)

const arr = [1, 2, 3, 4, 6, 10, 12, 21, 44, 51, 52, 60, 87, 122, 143, 152];
let bCount = 0;
let rCount = 0;

function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    bCount++;
    middle = Math.floor((start + end) / 2);
    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

function recursiveBinarySearch(array, item, start, end) {
  rCount++;
  let middle = Math.floor((start + end) / 2);
  if (start === end && item !== array[middle]) return null;
  if (item === array[middle]) {
    return middle;
  }
  if (item < array[middle]) {
    return recursiveBinarySearch(array, item, start, middle - 1);
  } else {
    return recursiveBinarySearch(array, item, middle + 1, end);
  }
}

console.log("binary search", binarySearch(arr, 41));
console.log("count =", bCount);

console.log(
  "recursive binary search",
  recursiveBinarySearch(arr, 41, 0, arr.length)
);
console.log("count =", rCount);
