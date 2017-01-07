'use strict'

module.exports = {
 computeAverage: function(num1,num2,num3) {
   var average = (num1 + num2 + num3) /3;
   return average;
 },
 
 computeFactorial: function(num) {
   var factorial = 1;
   for (var i=2;i<=num;i++) {
   		factorial *= i
   }
   return factorial;
 },

 convertTempCtoF: function(cTemp) {
   var fTemp = ((cTemp * (9/5)) + 32);
   return fTemp;
 },

 convertTempFtoC: function(fTemp) {
   var cTemp = ((fTemp - 32) / (9/5));
   return cTemp;
 }

}
