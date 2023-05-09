function brackets(string) {
    let isBracket = true
  switch (string.charAt(0)) {
    case "(":
        if(!(string.charAt(string.length-1) == ')')){
            isBracket = false
        }
      break;

    case "{":
        if(!(string.charAt(string.length-1) == '}')){
            isBracket = false
            console.log("here")
            

        }
      break;

    case "[":
        if(!(string.charAt(string.length-1) == ']')){
            isBracket = false
        }
      break;

      default:
        isBracket = false
        
      break;
  }

  console.log(isBracket)

}


brackets("(sss)")
