function solution(X, A) {
  var obj = new Set();
  for (var i = 0; i < A.length; i++) {
    if (A[i] <= X) {
      obj.add(A[i]);
      if (obj.size == X) {
        return i;
      }
    }
  }
  return -1;
}

//time runout error

function solution(X, A) {
  var B = [];
  var result = 0;
  for (var i = 1; i <= X; i++) {
    if (A.indexOf(i) == -1) {
      return (result = -1);
    }
    B.push(A.indexOf(i));
  }
  return (result = Math.max.apply(null, B));
}

//time runout error

function solution(X, A) {
  var number = 1;
  var index = [];
  for (var i = 0; i < A.length; i++) {
    if (A[i] == number && number <= X) {
      number += 1;
      index.push(i);
      i = 0;
    }
  }
  if (index.length == X) {
    return Math.max.apply(null, index);
  } else {
    return -1;
  }
}
