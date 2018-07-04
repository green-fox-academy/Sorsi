'use strict';

window.onload = () => {

  const genres = document.querySelectorAll('select.genres');
  /* console.log(genres) */
  const movies = document.querySelectorAll('select.movies');
  /* console.log(movies) */

  genres.forEach(element, index => {
    console.log(index[option].value)
  });
}
