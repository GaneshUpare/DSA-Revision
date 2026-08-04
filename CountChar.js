let str="ganesh upare"
let trim=str.replaceAll(" ","")
console.log(trim)
let count={}
for(let i=0;i<trim.length;i++){
    let char=trim[i]

    if(count[char]){
        count[char]+=1
    }
    else{
        count[char]=1
    }
    
    
}
console.log(count)
