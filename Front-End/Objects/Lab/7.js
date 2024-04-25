function addressBook(arr){

    const address = {}

    for(const elements of arr){
        const[name, street] = elements.split(':');

        address[name] = street;
    }
    const addressArray = Object.entries(address);
    
    
    const sortedArray = addressArray.sort((a, b)=> a[0].localeCompare(b[0]));
    //console.log(addressArray);

    for(const element of sortedArray){
        const[name, adress] = element;
        console.log(`${name} -> ${adress}`);
    }
    
    //console.log(address);
}
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])