// ✅ Revision Question 5: Rotate Array to the Left by K Positions

const arr = [1, 2, 3, 4, 5];
const k = 2;

let n=Math.floor(arr.length/k)
 let j=k
console.log(arr.length-k)
for(let i=0;i<n;i++){
   
        let temp=arr[i]
        arr[i]=arr[j+1]
        arr[j+1]=temp
        j++
        console.log(j)

}

console.log(arr)