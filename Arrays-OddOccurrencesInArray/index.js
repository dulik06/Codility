function solution(A) {
  var len = A.length;
  var sortedA = A.sort();
  var results = 0;

  for (var i = 0; i < len; i++) {
    var differeceI =
      sortedA.lastIndexOf(sortedA[i]) - sortedA.indexOf(sortedA[i]);

    if (differeceI % 2 !== 1) {
      results = sortedA[i];
    }
  }
  return results;
}
