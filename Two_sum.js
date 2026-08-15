

const arr = [1, 2, 4, 6, 8, 9, 11];
const target = 10;

let left = 0;
let right = arr.length - 1;

while (left < right) {

    let sum = arr[left] + arr[right];

    if (sum === target) {
        console.log(arr[left], arr[right]);
        break;
    }

    if (sum < target) {
        left++;
    } else {
        right--;
    }
}
