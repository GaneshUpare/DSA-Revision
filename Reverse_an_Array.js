const arr=[1,2,3,4,5,6]


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// const result=[]

// for(let i=arr.length-1;i>=0;i--){
//     result[result.length]=arr[i]
// }

// console.log(result)


let left=0
let right=arr.length-1

while(left<right){
    let temp
    temp=arr[left]
    arr[left]=arr[right]
    arr[right]=temp

    left++
    right--
}

console.log(arr)