function sayHello(){
    return function(){
        console.log('Hello!');
    };
}

const result = sayHello();

result();