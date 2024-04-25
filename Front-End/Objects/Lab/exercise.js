const obj = {
    firstName: 'Dimitar',
    latName: 'Damianov',
    sayHi(){
        console.log('Hello!');
    },
}
//obj.sayHi();


for(let el of Object.entries(obj)){
    const[key, value] = el;
    console.log(`${key} => ${value}`);
}

