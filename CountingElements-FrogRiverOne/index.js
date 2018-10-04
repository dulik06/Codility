function solution(A) {
	A.sort(function(a,b) {return b-a});
	var result = 1;
		for (var i = 0; i < A.length; i++) {
        if(A[i] == A[i+1] || A[0] !== A.length) {
					return result = 0
        }
		}
		return result;
}
