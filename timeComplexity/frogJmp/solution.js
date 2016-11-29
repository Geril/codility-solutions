function solution(X, Y, D) {
    const distance = Y - X;
    const reqJumps = distance / D;
    const truncated = Math.trunc(reqJumps);
    if (truncated === reqJumps) {
    	return reqJumps;
    }
    return truncated + 1;
}
