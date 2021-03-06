'use strict';
 window.onload = () => {

let getQuestions = new XMLHttpRequest();
//kérem a backendtől az adatokat
getQuestions.open('GET', 'http://localhost:3000/questions', true);
getQuestions.onload = () => {
  //átalakítom a kapott adatokat
  let response = JSON.parse(getQuestions.responseText);
  //kiválasztom a HTML containeremben lévő egyetlen delete gombomat
  let parentDiv = document.querySelector('.delete');
  //végigmegyek a válaszomon
  response.questions.forEach(element => {
    let questionDiv = document.createElement('div');
    let textDiv = document.createElement('div');
    textDiv.innerHTML = element.question;
    let deleteDiv = document.createElement('div');
    deleteDiv.innerHTML = 'DELETE';
    deleteDiv.addEventListener('click', (event) => {
      let deleteQuestion = new XMLHttpRequest();
      deleteQuestion.open('DELETE', `http://localhost:3000/questions/${element.id}`, true);
      deleteQuestion.onload = () => {
        location.reload();
      }
      deleteQuestion.send();
    });
    questionDiv.appendChild(textDiv);
    questionDiv.appendChild(deleteDiv);
    parentDiv.appendChild(questionDiv);
  });
}
getQuestions.send();
//kiválasztom a formom, ha töltik, az inputomat kimentem egy válotóba
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
  let inputs = event.target.elements;
  let answers = [];
  let index = 0;
  for (let i = 0; i < 4; i++) {
    let temp = {};
    index++;
    temp.value = inputs[`answer-${index}`].value;
    console.log(inputs[`answer-${index}`].value);
    if (inputs.isCorrect[i].checked) {
      temp.is_correct = 1;
    } else {
      temp.is_correct = 0;
    }
    console.log(temp);
    answers.push(temp);
  }
  let question = inputs.question.value;
  
  let postQuestion = new XMLHttpRequest();
  postQuestion.open('POST', 'http://localhost:3000/questions', true);
  postQuestion.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
  postQuestion.send(JSON.stringify({
    question,
    answers
  }));
  postQuestion.onload = () => {
    location.reload();
  }
});

}