function solution(P, C) {
    const pairs = parseInt(P / 2);
    if (pairs >= C) {
    	return C;
    } else {
    	return pairs;
    }
}
