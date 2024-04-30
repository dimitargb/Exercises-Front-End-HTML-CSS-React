function movieInfo(arr) {
  const movies = [];

  for (const elements of arr) {
    if (elements.includes("addMovie")) {
      const movieName = elements.split("addMovie ")[1];
      movies.push({ name: movieName });
    } else if (elements.includes("directedBy")) {
      const [movieName, director] = elements.split(" directedBy ");

      let foundMovie = movies.find((el) => el.name === movieName);

      if (foundMovie) {
        foundMovie["director"] = director;
      }
    } else if (elements.includes("onDate")) {
      const [movieName, date] = elements.split(" onDate ");

      let foundMovie = movies.find((el) => el.name === movieName);

      if (foundMovie) {
        foundMovie["date"] = date;
      }
    }
  }

  for (const movie of movies) {
    if (movie.name && movie.date && movie.director) {
      let finalResult = JSON.stringify(movie);
      console.log(finalResult);
    }
  }
}
movieInfo([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
