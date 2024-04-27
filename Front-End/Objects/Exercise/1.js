function printList(arr){
    let list = [];

    for(let employee of arr){
        
        let name = employee;
        let number = Number(employee.length);
        
        list.push(name, number);
        console.log(`Name: ${name} -- Personal Number: ${number}`);
    }
 
}
printList([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ])