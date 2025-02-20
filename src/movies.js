// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director) 
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenDramaMovies = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes('Drama'))
  return stevenDramaMovies.length
}




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0){return 0}
  let scoreList
  scoreList = arr.map((movie) => {
    if(!movie.score){return 0} 
     else {return movie.score}})

  let sumScore
  sumScore = scoreList.reduce((a,b) => a + b)

  let scoreAverage 
  scoreAverage = sumScore/(scoreList.length)

  return Math.round(scoreAverage*100)/100
}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let dramaFilms
  dramaFilms = arr.filter((movie) => movie.genre.includes('Drama'))
  
  return scoresAverage(dramaFilms)
}







// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  return moviesArr
    .map((movie) => movie)
    .sort((a, b) => {
      if (a.year - b.year === 0) {
        return a.title < b.title ? -1 : 1;
      }
      return a.year - b.year;
    });
}







// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayMovies) {
  const titles = arrayMovies.map(movieTitle => movieTitle.title)
  titles.sort((a,b) => {
    if(a < b) return -1;
    if(a > b) return 1;
  })
  return titles.slice(0,20)
}






// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}




// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
