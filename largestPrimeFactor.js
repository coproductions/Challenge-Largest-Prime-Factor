exports.largestPrimeFactor = largestPrimeFactor;
function largestPrimeFactor(n){
  var x=2;
  while(n !==1){
    if(n%x===0){
      if(n/x > 1){
        n = n/x;
      }
      else return x;
    }
    else x++;
  }
}
