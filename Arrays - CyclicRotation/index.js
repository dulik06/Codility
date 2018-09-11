function solution(A = [], K) {
    var L = A.length;

   if(L>K && K>=1) {
     return A.slice(-K).concat(A.slice(0, L-K))
   } else {
     return A.slice(L - K%L).concat(A.slice(0, L - K%L))
   }
}
