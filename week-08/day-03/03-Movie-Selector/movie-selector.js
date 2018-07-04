'use strict';

window.onload = () => {

  const genres = document.querySelector('select.genres');
  console.log(genres)
  const movies = document.querySelector('select.movies');
  console.log(movies)

  genres.addEventListener('change', (e) => {
    e.preventDefault();
    
    console.log(e.target)
    console.log(e.target.selectedIndex)
    console.log(e.target.options[e.target.selectedIndex].value)
  })

  

}
