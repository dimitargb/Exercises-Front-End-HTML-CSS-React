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

// Достъпване на пропертита на обект в друг обект

console.log(obj.address.street.streetName);
// Войнишка Планина

// промяна на стойност в обекта
obj.address.street.streetName = 'Opalchenska';
console.log(obj.address.street.streetName);