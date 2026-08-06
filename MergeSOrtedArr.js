const arr1 = [1, 3, 5, 7, 8, 9];
const arr2 = [2, 4, 6, 8];

const arr3 = [];

let i = 0;
let j = 0;

while (arr1.length > i && arr2.length > j) {
  if (arr1[i] <= arr2[j]) {
    arr3[arr3.length] = arr1[i];
    i++;
  } else {
    arr3[arr3.length] = arr2[j];
    j++;
  }
}

while (i < arr1.length) {
  arr3[arr3.length] = arr1[i];
  i++;
}

while (j < arr2.length) {
  arr3[arr3.length] = arr2[j];
  j++;
}

console.log(arr3);
