// ✅ Revision Question 5: Rotate Array to the Left by K Positions

const arr = [1, 2, 3, 4, 5];
const k = 2;


for(let i=0;i<(arr.length)/2;i++){
    for(j=arr.length-1;j>k;j--){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
    }
}

console.log(arr)