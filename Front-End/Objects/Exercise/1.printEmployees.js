function printList(arr){

    arr.forEach((employee)=>{
        
        let name = employee;
        let number = Number(employee.length);
        
        console.log(`Name: ${name} -- Personal Number: ${number}`);
    });
}
printList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])