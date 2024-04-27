function printList(arr){

    let list = {};

    for(let employee of arr){
        let name = employee;
        let number = Number(employee.length);
        list[name] = number;
    };

    for( let employee of Object.entries(list)){
        let [name, number] = employee;

        console.log(`Name: ${name} -- Personal Number: ${number}`);
        
    }

}

printList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])