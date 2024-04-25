function printCharters(startChar, endChar){

    let newArray = [];
    let start = Math.min(startChar.charCodeAt(), endChar.charCodeAt());
    let end = Math.max(startChar.charCodeAt(), endChar.charCodeAt());
    
    for(let i = start + 1 ; i < end; i++){
        
        let currentChar = String.fromCharCode(i);
        newArray.push(currentChar)
        }
    console.log(newArray.join(' '));
}
printCharters('C', '#')