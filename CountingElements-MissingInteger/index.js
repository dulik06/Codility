function solution(A) {
	var b  = [];
	for (var i = 0; i<A.length; i++) {
		if(A[i] > 0) {
			b.push(A[i])
		}
	}
	b.sort(function(a, b) {return a-b});
	if(b[0] !== 1) {return 1}
	for (var j = 0; j<b.length; j++) {
		if(b[j] !== b[j+1] && b[j]+1 !== b[j+1] ) {
			return b[j]+1
		}
	}
}
