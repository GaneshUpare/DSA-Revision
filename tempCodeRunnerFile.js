// Find two numbers whose sum equals the target.


const arr = [2, 7, 11, 15];
const target = 13;

let count=0
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]===target){
            console.log(arr[i],arr[j])
        }
        else{
            count++
            break
        }
    }
}

if(count){
    console.log("ele not present")
}