function storeInfo(arr){

    const adresses = {};

    for(const element of arr){
        
        const[name, street] = element.split(':');
        
        adresses[name] = street
    }
    
    const addressArray = Object.entries(adresses);
    
    const sortedArray = addressArray.sort((a, b)=> a[0].localeCompare(b[0]));
    
    for(const el of sortedArray){
        //console.log(el.join(' -> '));
        
        const[name, adress] = el;

        console.log(`${name} -> ${adress}`);
    }
}
storeInfo(['Bob:Huxley Rd',
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