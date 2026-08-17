// const arr = [1, 2, 3, 4, 5];
// let target = 9;
// let left = 0;
// let right = arr.length - 1;

// while (left < right) {
//   if (target == arr[left] + arr[right]) {
//     console.log(arr[left], arr[right]);
//     break;
//   } else if (target > arr[left] + arr[right]) {
//     left++;
//   } else {
//     right--;
//   }
// }

// const arr = [1, 2, 3, 4, 5];
// const arr=[1,2,4,2,1]

// let left =0
// let right=arr.length-1
// let found=true
// while(left<right){

//     if(arr[left]!=arr[right]){

// found=false
//          break

//     }

//     left++
//     right--
// }
// if(found){
// console.log("array is palindrome")
// }
// else{
//  console.log("Array is not palindrome")
// }

// let largest = arr[0];
// let sec_largest = arr[1];

// if (arr[0] < arr[1]) {
//   let temp = largest;
//   largest = sec_largest;
//   sec_largest = temp;
// }
// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     sec_largest = largest;
//     largest = arr[i];
//   }

//   if (arr[i] > sec_largest && arr[i] < largest) {
//     sec_largest = arr[i];
//   }
// }

// console.log("largest", largest);
// console.log("sec_largest", sec_largest);
// console.log(arr);

// let left=0
// let right=arr.length-1

// while(left<right){
// let temp =arr[left]
//     arr[left]=arr[right]
//     arr[right]=temp

//     left++
//     right--
// }

// console.log(arr)

let str = "ggggganeshhhhh";

let freq = {};

for (let i of str) {
  if (!freq[i]) {
    freq[i] = 1;
  } else {
    freq[i]++;
  }
}

console.log(freq);
