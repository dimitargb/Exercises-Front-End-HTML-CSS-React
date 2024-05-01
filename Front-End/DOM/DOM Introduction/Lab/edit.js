
function editElements(){
let h1Element = document.getElementById('e1');

newElement =  h1Element.textContent.replace('%insert name here%!','Document Object Model!' );

h1Element.textContent = newElement;
 
}