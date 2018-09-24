function solution(A = [], K) {
  var L = A.length;
  return A.slice(L - (K % L)).concat(A.slice(0, L - (K % L)));
}
