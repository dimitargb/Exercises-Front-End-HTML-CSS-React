function storePersonInfo(arr){

    const phoneBook = {};

    for(const element of arr){
       
        const[name, phone] = element.split(' '); 
        phoneBook[name] = phone;
    }
      // console.log(phoneBook);

    for(const phones of Object.entries(phoneBook)){
        const[key, value] = phones;
       // console.log(phones.join(' -> '));
       console.log(`${key} -> ${value}`);
    }

      if(phoneBook.hasOwnProperty('Bill')) // проверка дали съдържа такъв ключ.
      {
        console.log('Phonebook has own property Bill!');
      }
   // console.log(`${key} -> ${value}`);
}
storePersonInfo(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])