// Remove Duplicates from a Sorted Array


const arr = [1, 1,2, 2, 3, 3, 4, 5, 5];

let i=0 

for(let j=1;j<arr.length;j++ ){

    if(arr[i]!==arr[j]){  //1!==1 ==>false |  1!==2==>true 
        i++
        arr[i]=arr[j]
        // console.log(arr)
        // break
    }
}

arr.length=i+1

console.log(arr)