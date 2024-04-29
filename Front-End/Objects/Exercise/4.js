function printMovies(arr){

    let movieList = {};

    for( let elements of arr){
        if(elements.includes('addMovie')){
            let movieName = elements.split('addMovie ')[1];
            movieList['name'] = movieName;
        }

        else if(elements.includes('directedBy')){
            let[movieName, director] = elements.split(' directedBy ');
            
            if(!movieList.hasOwnProperty(movieName)){
                movieList['director'] = director;
            }
            
        }

        else if(elements.includes('onDate')){
            let[movieName, date] = elements.split(' onDate ');
            
            if(!movieList.hasOwnProperty(movieName)){
                movieList['date'] = date;
            }
        }

        
        
    }
   
    
  
    console.log(movieList);
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