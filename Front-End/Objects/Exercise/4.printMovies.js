function printMovies(arr){

    let movies = [];

    arr.forEach((row)=>{
        
        if(row.includes('addMovie')){
            let movieName = row.split('addMovie ')[1];
            
            movies.push({name: movieName})
        } 
        else if (row.includes('directedBy')){
            let [movie, director] = row.split(' directedBy ')
            
            let searching = movies.find((element)=>
                element.name === movie);

            if(searching){
                searching['director'] = director;
            }
        }  
        else if (row.includes('onDate')){
            let [movie, date] = row.split(' onDate ');

            let searching = movies.find((element)=>
                element.name === movie);

            if(searching){
                searching['date'] = date;
            }

        }
   });

   movies.forEach((movie)=>{
    if(movie.name && movie.director && movie.date){
       let formated = JSON.stringify(movie);
       console.log(formated);
    }
    
   })

}
printMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])