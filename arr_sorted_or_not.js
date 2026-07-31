// Check if an Array is Sorted


const arr = [1, 2, 3, 4, 5];

let isSorted=true
for(let i=0;i<arr.length-1;i++){
    if(arr[i+1]<arr[i]){
        isSorted=false
        break
    }

    
}

if(isSorted){
        console.log("Array is sorted")
    }
    else{
        console.log("Array is not Sorted")
    }