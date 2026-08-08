// Find two numbers whose sum equals the target.


const arr = [2, 7, 11, 15];
const target = 13;

let found = false;

for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] + arr[j] === target) {
            console.log(arr[i], arr[j]);
            found = true;
            break;
        }
    }

    if (found) {
        break;
    }
}

if (!found) {
    console.log("Element pair not present");
}