'use strict';

window.onload = () => {

  /* console.log(document.querySelectorAll(`input[name='fav-animal']:checked`))
  let favAnimals = document.querySelectorAll(`input[name='fav-animal']`); */
  let catButton = document.getElementById('cat-lover');
  let signUpButton = document.getElementById('sign-up');

  document.addEventListener('click', () => {
    if (document.getElementById('dog').checked || document.getElementById('cat').checked) {
      signUpButton.disabled = false;
    } 
    if (document.getElementById('yes').checked) {
      catButton.disabled = false;
    }
  });

  catButton.addEventListener('click', () => {
    alert(`Thank you, you've successfully signed up for cat facts`);
  });

  signUpButton.addEventListener('click', () => {
    alert(`Sigh, we still added you to the cat facts list`);
  });

}
