const arr = [1, 3, 4, 7, 10];
const target = 15;


let i=0
let j=arr.length-1

let diff
let small_diff=Infinity
while(i<j){

     if(arr[i]+arr[j]===target){
        console.log(arr[i],arr[j],"diffrence 0")
        break
    }
    if((arr[i]+arr[j])>target){
        diff=arr[i]+arr[j]-target
        if(diff<small_diff)
        {
            small_diff=diff
        }
        j--
    }
    else{
        diff=target-(arr[i]+arr[j])
        if(diff<small_diff)
        {
            small_diff=diff
        }
        i++
    }
   
}

console.log(small_diff)