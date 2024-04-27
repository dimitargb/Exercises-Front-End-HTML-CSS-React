function printObjects(arr){

    

    for(let currentTown of arr){
        
        let[town, latitude, longitude] = currentTown.split(' | ');
        
      let currentTownInfo = {
        town,
        latitude: Number(latitude).toFixed(2),
        longitude: Number(longitude).toFixed(2),
      };

      console.log(currentTownInfo);
    }
    
}

printObjects(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])