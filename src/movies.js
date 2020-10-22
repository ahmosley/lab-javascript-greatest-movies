// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  let allDirectors = movies.map((movie) => movie.director);
  return allDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    if (array.length === 0) return 0;
  let spielMoviesArr = movies.filter(
    (movie) => {return movie.director == "Steven Spielberg" && movie.genre.includes("drama")}
  );
    return spielMoviesArr.length;

  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage() {
    let sumRates = array.reduce((accum, currValue) => {
        return accum + currValue.rate/array.length.toFixed(2)*1;}, 0)
        return Number(sumRates.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMovieRates(){const dramaMovies= movies.filter(movie => movie.genre.includes("drama"))
const avgDrama= dramaMovies.reduce(function(accum, currVal) {
    return accum + currVal.rate / dramaMovies.length;
}, 0) 
return Number(avgDrama.toFixed(2));}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(){
    let moviesByYear= [...movies].sort((a,b)=>a.year-b.year); {
    }
    return moviesByYear;
  }
  orderByYear(movies)


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(){
    return [...movies].sort((a,b)=>a.title <b.title
  ? -1 : 1).splice(0,20).map(movie => movie.title)
  }
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
