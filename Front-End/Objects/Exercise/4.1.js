function addMovies(arr){

    const movies = [];

    for(const element of arr){

        
        if(element.includes('addMovie')){
            const movieName = element.split('addMovie ')[1];
            
            movies.push({name: movieName})
        }
        else if(element.includes('directedBy')){
            const[movieName, director] = element.split(' directedBy ');
            
            const serchedMovie = movies.find((el) => el.name === movieName);
            if(serchedMovie){
            serchedMovie['director'] = director;
            //console.log(movies[0]);
            }
        }

        else if(element.includes('onDate')){
            const[movieName, date] = element.split(' onDate ');
            
            const serchedMovie = movies.find((el) => el.name === movieName);
            if(serchedMovie){
            serchedMovie['date'] = date;
            //console.log(movies[0]);
            }
        } 
    }

    for(const movie of movies){
        if(movie.name && movie.director && movie.date){
            const result = JSON.stringify(movie);
            console.log(result);
        };
    }
    
}
addMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])