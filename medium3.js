function gcd (number1,number2){
    const xDenom = []
    const yDenom = []
    const common =[]

    for(let i=1; i<=number1; i++){
        if(number1%i === 0){
            xDenom.push(i)
        }
    }

    for(let i=1; i<=number2; i++){
        if(number2%i === 0){
            yDenom.push(i)
        }
    }


    for(let i=0; i<xDenom.length; i++){
        let element = xDenom[i]
        if(yDenom.includes(element)){
            common.push(element)
        }
    }

    console.log(common[common.length-1])
  
}

gcd(1000, 1200)