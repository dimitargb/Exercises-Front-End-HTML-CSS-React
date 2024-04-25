function trackGuests(arr){

  let list = [];

  for(let i = 0; i < arr.length; i ++){

    let currentRow = arr[i];
    let firstLine = currentRow.split(' ');
    let name = firstLine[0];
    
    if(firstLine.length === 3){
        if(list.includes(name)){
            console.log(`${name} is already in the list!`);
        } else {
            list.push(name)
        }
    } else {
        if(!list.includes(name)){
            console.log(`${name} is not in the list!`);
        } else {
            let searchedName = list.indexOf(name);
            list.splice(searchedName, 1);
        }
    }
    
  }
  console.log(list.join('\n'));
}
trackGuests(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])