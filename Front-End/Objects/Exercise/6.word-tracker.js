function wordTracker(arr){

    let words = arr.shift().split(' ');
    
    let occurences = {};

    words.forEach((word)=> {
        occurences[word] = 0;

        arr.forEach((el)=> {
            if((word === el)){
               //occurences[word] += 1;
                occurences[word] ++;
            }
        });
    });

   let occurencesArray = Object.entries(occurences);

   let sorted = occurencesArray.sort((a, b) => b[1] - a[1]);
   
    for(let element of sorted){
        let[word, occurences] = element;
        console.log(`${word} - ${occurences}`);
    }
    
}
wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 
    'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])