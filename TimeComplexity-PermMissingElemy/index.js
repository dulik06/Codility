function solution(A) {
	var result = 1;
    var B = A.sort(function(a, b) {return a-b});
    for (var i = 0; i < B.length; i++) {
		if(B[0] === 1 && B[i]+1 != B[i+1]) {
			return result = B[i]+1
		}
	} return result;
}
