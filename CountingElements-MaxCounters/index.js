//TIMEOUT ERROR

function solution(N, A) {
	var B = [];
	for (var a = 0; a < N; a++) {
		B.push(0);
	}
	for (var i = 0; i < A.length; i++) {
		if(A[i] >=1 && A[i] <= N) {
			B[A[i]-1] += 1;
		} else {
			for (var j = 0; j < B.length; j++) {
				B[j] = Math.max.apply(null, B);
			}
		}
	}
	return B;
}
