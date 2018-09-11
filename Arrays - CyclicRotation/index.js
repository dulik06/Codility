function solution(A = [], K) {
    var B = [];
    var C = [];
    var D = [];
    var L = A.length;

   if(L>K && K>=1) {
     B = A.slice(0, L-K)
     C = A.slice(-K)
     D = C.concat(B)
   } else {
     B = A.slice(0, L - K%L);
     C = A.slice(L - K%L);
     D = C.concat(B)
   }
    return D;
}
