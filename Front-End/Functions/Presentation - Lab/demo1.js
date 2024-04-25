 function repeatCount(count){
    console.log('*'.repeat(count));
 }
 repeatCount(8);

 // function declaration
 function printText(text){
    console.log(text);
 }

 // function Expression
 let printAnotherText = function(text) {
    console.log(text);
 }

 // Self-invocation (recursion)
 function countDown(x){
   console.log(x);
   if (x > 0) {
      countDown(x - 1);
    }
   }
 
  printText('Hello, i am here!');
  printAnotherText('Hello my name is Dimitar.');
  countDown(10);
