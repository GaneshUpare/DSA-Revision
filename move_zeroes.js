const arr = [1,0, 1, 0, 3, 12];


for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[i]!==0 && arr[j]==0){
            let temp=arr[i]

            arr[i]=arr[j]
            arr[j]=temp
            console.log(arr)
        }
    }
}



const arr = [1, 0, 1, 0, 3, 12];

let j = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] !== 0) {

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        j++;
    }
}

console.log(arr);
console.log(arr)