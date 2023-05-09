function vowelChecker(x){
    let vowels = ['a','e','i','o','u']

    if(vowels.includes(x.toLowerCase())){
        console.log("This is a vowel")
    }
    else{
        console.log('This is not a vowel')
    }
   

}

vowelChecker('x')