function sortBy2Critera(arr){

    let sortedArray = arr.sort((a, b) => {

        return a.length - b.length || a.localeCompare(b);
    });
    //  for(let sorted of sortedArray){
    //     console.log(sorted);
    //  }
     
    let num = 1;
    sortedArray.forEach(element=>{
        console.log(`${num}. ${element}`);
        num++;
    });
}
sortBy2Critera(['alpha', 'beta', 'gamma'])