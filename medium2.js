function anagram(x,y){
    let isAnagram = true
    y = y.toLowerCase()
    for(let i = 0; i<x.length;i++){
        var char = x.charAt(i)
        
        if(char==' '){
            continue
        }

        if(!y.includes(char.toLowerCase()))
        {
            console.log(char.toLowerCase())
             isAnagram = false;
             console.log(isAnagram)
            return
        }


    }
console.log(isAnagram)
}

anagram("Things are good", 'Dogs eat ants')