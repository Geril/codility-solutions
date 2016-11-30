function solution(A) {
    let returnValue;
    const sorted = A.sort();
    for (let i = 0; i < sorted.length; i++) {
        if (i % 2 === 0 && sorted[i+1] !== sorted[i]) {
            returnValue = sorted[i];
            break;
        }
    }
    return returnValue;
}
