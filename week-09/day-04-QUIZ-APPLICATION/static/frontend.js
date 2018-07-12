'use strict';

window.onload = () => {

let http = new XMLHttpRequest();
let scoreNumber = 0;
//a getQuestion functionömben hívom meg a clearClick functiont, amivel a válaszok kiválasztása után a többi gombot leresetelem
let clearClick = () => {
  let buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.disabled = true;
  });
};
//elkapom a textarea-m inputját
let textArea = document.querySelector('textarea');
let form = document.querySelector('form');
form.addEventListener('submit', submitForm)
function submitForm(e) {
  e.preventDefault();
  console.log(textArea.value);
}
/* Küldök egy kérést a backendemnek, hogy megkapjam a kérdéseket és válaszokat, majd a választ kiküldöm
a HTML-emre.  */
let getQuestion = () => {
  http.open('GET', 'http://localhost:3000/game', true);
  http.onload = () => {
    //átalakítom a válaszomat, amit kaptam a backendről
    let response = JSON.parse(http.responseText);
    //kiválasztom a container divemet a html-ből, üres értéket adok hozzá
    let container = document.querySelector('.container');
    container.innerHTML = '';
    //létrehozok egy új divet, majd class-t adok hozzá
    let question = document.createElement('div');
    question.classList.add('question');

    let score = document.createElement('div');
    let quiz = document.createElement('div');
    quiz.classList.add('quiz');
    score.classList.add('score');

    score.innerHTML = `Score: ${scoreNumber}`;
    question.innerHTML = response.question;
    container.appendChild(score);
    quiz.appendChild(question);
    //4 gombot készítek, mindegyik innerHTML-e a responseom válasza lesz
    //ha a jó gomba kattintanak új class-t adok neki a CSS miatt és növelem a scoret
    //ha a rosszra, akkor csak class-t adok neki, hogy a CSS-ben változtatni tudjam a színét
    for (let i = 0; i < 4; i++) {
      let button = document.createElement('button');
      button.innerHTML = response.answers[i].answer;
      button.addEventListener('click', (event) => {
        if (response.answers[i].is_correct == 1) {
          button.classList.add('right');
          scoreNumber++;
        } else {
          button.classList.add('wrong');
          /* scoreNumber; */
        }
        //külső functiont hívok a gombok érinthetetlenné tételéhez
        clearClick();
        //functionömön belül visszahívom a functiont, hogy 3 mp-enként adjon új kérdést
        setTimeout(getQuestion, 3000);
      });
      //for-on belül adom hozzá a buttont a quizhez
      quiz.appendChild(button);
    }
    //viszont for-on kívül adom hozzá a quizt a containeremhez
    container.appendChild(quiz);
  }
  //elküldöm az egészet
  http.send();
}
//meghívom a functiont
getQuestion();

}