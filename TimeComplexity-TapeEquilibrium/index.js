//final solutio

function solution(A) {
	let sum = 0;
	for (var i = 0; i < A.length; i++) {
		sum += A[i];
		A[i] = sum*2;
	}
	A.pop();
	for(var j = 0; j< A.length; j++) {
		A[j] = Math.abs(A[j]-sum);
    }
		return A.sort(function(a,b) {return a-b})[0]
}


// first try with timeout error

function solution(A) {
	let sum = 0;
	let B = [];
	let C = [];
		for (var i = 0; i < A.length; i++) {
			sum += A[i];
			B.push(sum)
		}
		for (var j = 0; j < B.length -1; j++) {
			C.push(Math.abs(B[j]-sum+B[j]))
			C.sort(function(a,b) {return a-b})
		}

	return C[0]
}
