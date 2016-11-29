function solution(A, K) {
    if (!A.length) {
        return A;
    }

    for(let i=0; i < K; i++) {
        let lastItem = A.pop();
        A.unshift(lastItem);
    }
    return A;
}
