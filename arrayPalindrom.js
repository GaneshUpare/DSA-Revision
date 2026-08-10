// Check if an Array is a Palindrome


const arr = [1, 2, 3, 2, 1];
// const arr = [1, 2, 3, 4, 1];

let right=arr.length-1
let left=0

count=0
while(left<right){

    if(arr[left]==arr[right]){
        
        left++
        right--
        count++
    }
    else{
        console.log("not palindrom")
        count=false
        break    }
}

if(count){
console.log("palindrome")
}


