let doublle = function(a){
    return a * 2;
}
console.log(doublle(10));

// Arrow function при arrow Function махаме function иоставаме само параметрите.
let doublle1 = (z)=> {
    return z * 4;
}
console.log(doublle1(2));

// Arrow function _ съкратен варянт
let doublle2 = (x) => x * 3;
console.log(doublle2(5));

// Arrow function without body with single parameter
//Ако имаме само един параметър койот приема функцията, тогава можем да махнем скобите
let doublle3 = x => x * 3;
console.log(doublle3(4))