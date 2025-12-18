 function  operate (num1, num2, callback){
   return  callback (num1, num2) ; }

 function multiply (num1, num2) { return  num1 * num2 ; }
 
 function divide (num1, num2) { return  num1 / num2 ; }

 console . log ("multiplication :", operate ( 6 ,  3 , multiply ) ) ; // 18
 console . log ("division :", operate ( 6 ,  3 , divide ) ) ; // 2