let obj = {
    firstName: 'Petia',
    lastName: 'Todorova',
    address: {
        city: 'Sofia',
        street: {
            streetName: 'Войнишка Планина',
            streetNumber: 24,
        },
    },
}

let result = JSON.stringify(obj); // превръщане в JSON формат;
let format = JSON.parse(result); //  превръщане JSON в JS формат;
console.log(result);
console.log(format);