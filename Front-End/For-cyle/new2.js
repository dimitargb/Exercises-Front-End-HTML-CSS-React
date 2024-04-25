//  const arr = [13, 23, 12, 45, 22, 48, 66, 100]

//  for(let i = 1; i < arr.length; i++){
//      if(i % 2 === 0){
//         console.log(arr[i]);
//      }
//  }

for(let i = 1; i < 10; i++ ){
    if(i === 3){
        continue;
    }

    if( i === 6){
        break;
    }

    console.log(i);
}