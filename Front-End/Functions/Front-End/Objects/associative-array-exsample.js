function test(keyName){
    return {
        age: 24,
        town: 'Sofia',
        [keyName]: undefined,
    }
}

console.log(test('lastName'));

// Така се подава динамично от вънка ключ на обекта !!!

const myFunction = (arr) => {
    const myObject = {};

    for(const element of arr){
        const[name, age] = element.split(' -> ');
        myObject[name] = age;
        
    }
    //console.log(myObject);
    for(const entry in myObject){
        console.log(`Person ${entry} is, ${myObject[entry]} years old!`);
    }
}

myFunction(['Dimitar -> 24','Ivan -> 35','Ivo -> 31']);