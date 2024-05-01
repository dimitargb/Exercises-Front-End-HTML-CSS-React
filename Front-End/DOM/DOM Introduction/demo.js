console.log('external file');

let header = document.getElementsByTagName('h1')[0];
let button = document.getElementsByTagName('button')[0];
button.addEventListener('click', changeHeader);
let paragraph = document.getElementsByTagName('p')[0];
let section = document.getElementsByTagName('section')[0];
let inputElement = document.getElementsByTagName('input')[0];
let inputElementValue = document.getElementsByTagName('input')[1];
//console.log(typeof inputElementValue);



function changeHeader(){
    header.textContent = "Hello Again";
    header.style.background = 'lightgreen';
    button.style.background = 'darkorange';
    paragraph.style.display = 'none';
    section.style.background = 'pink';
    inputElement.value = 'Change text here ...';
}