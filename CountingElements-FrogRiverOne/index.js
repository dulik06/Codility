//time runout error

function solution(X, A) {
	var B = [];
	var result = 0;
	for (var i = 1; i <= X; i++) {
		if(A.indexOf(i) == -1) {
			return result = -1
		}
		B.push(A.indexOf(i))
	}
 	return result = Math.max.apply(null, B);
}
