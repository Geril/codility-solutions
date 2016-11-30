function solution(N) {
    const binArray = N.toString(2).split('').reverse();
    binArray.splice(0, binArray.indexOf('1'));
    let counter = 0;
    let tempCounter = 0;
    for (let i = 0; i < binArray.length; i++) {
        if (binArray[i] === '0') {
        	tempCounter++;
            if (tempCounter > counter ) {
                counter = tempCounter;
            }
        } else {
        	tempCounter = 0;
        }
    }
    return counter;
}
