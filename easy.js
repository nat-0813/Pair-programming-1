function arr (x) {
const even = []
const odd = []

for(let i = 0; i<x.length;i++){
    let element = x[i]
    if(element%2===0){
        even.push(element)
    }
    else(
        odd.push(element)
    )
}

    console.log(`even number ${even}`);
    console.log(`odd ${odd}`);
}

arr([2,4,6,1,3])