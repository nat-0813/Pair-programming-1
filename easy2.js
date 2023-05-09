function arr(x) {
  let prime = [];
  for (let i = 0; i < x.length; i++) {
    let element = x[i];

    if (element < 2) {
     continue
    }


    let isPri = true;
    for (let y = 2; y <= element / 2; y++) {
      if (element % y === 0) {
        isPri = false;
        break;
      }
    }

    if (isPri) {
      prime.push(element);
    }
  }
  console.log(`primeArr = ${prime}`);
}

arr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
