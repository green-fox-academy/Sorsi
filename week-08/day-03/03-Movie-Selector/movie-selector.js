'use strict';

window.onload = () => {

  const scifis = document.querySelectorAll('.sci-fi');
  const dramas = document.querySelectorAll('.drama');
  const comedys = document.querySelectorAll('.comedy');
  const movieList = document.querySelectorAll('.movies option');
  const movies = document.querySelector('.movies');
  let result = document.querySelector('span');

  let genres = document.querySelector('.genres')

  genres.addEventListener('change', (e) => {
    movieList.forEach(element => {
      element.style.display = 'none';
    });

    movieList[0].selected = true;

    if (e.target.value === 'sci-fi') {
      scifis.forEach(element => {
        element.style.display = 'block';
      });
    }
    else if (e.target.value === 'drama') {
      dramas.forEach(element => {
        element.style.display = 'block';
      });
    }
    else {
      comedys.forEach(element => {
        element.style.display = 'block';
      });
    }
  });

  movies.addEventListener('change', (e) => {
    result.innerText = e.target.value;
  });
  
}