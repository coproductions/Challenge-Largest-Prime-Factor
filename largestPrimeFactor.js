exports.largestPrimeFactor = largestPrimeFactor;
function largestPrimeFactor(n){
  //var primeNumber = 0;
  var factor = 0;
  var count = 0;
  var isNotPrime = false;
  for (var i = n-1; i > 1; i--) {
    debugger;
    if(n%i===0){
      factor = i;
      for(var j = factor-1; j>1; j--){
        if(factor%j===0){
          isNotPrime = true;
        }
      }
      if(!isNotPrime){
        return factor;
      }
      else isNotPrime = false;
    }

  }
  // do your work here

  //return primeNumber;
};
largestPrimeFactor(13195);


// var testPrime = function(number){
//   for (var i = number - 1; i > 1; i--) {
//     if(number%i===0){
//       return
//     }
//   };
// }