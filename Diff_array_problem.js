const arr = [1, 3, 4, 7, 10];
const target = 15;


let i=0
let j=arr.length-1

let diff
while(i<j){

     if(arr[i]+arr[j]===target){
        console.log(arr[i],arr[j],"diffrence 0")
        break
    }
    if(arr[i]+arr[j]>target){
        diff=arr[i]+arr[j]-target
        j--
    }
    else{
        diff=target-arr[i]+arr[j]
        i++
    }
   
}

console.log(diff)