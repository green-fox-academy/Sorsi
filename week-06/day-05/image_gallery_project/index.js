'use strict';

window.onload = () => {

  const images = [
    { id: 1, title: '12 Angry Men', year: 1957, src: 'images/movie01.jpg', desc: 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.' },
    { id: 2, title: 'Four rooms', year: 1995, src: 'images/movie02.jpg', desc: `Four interlocking tales that take place in a fading hotel on New Year's Eve.` },
    { id: 3, title: 'Edward Scissorhands', year: 1990, src: 'images/movie03.jpg', desc: `A gentle man, with scissors for hands, is brought into a new community after living in isolation.` },
    { id: 4, title: 'Trainspotting', year: 1996, src: 'images/movie04.jpg', desc: `Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends.` },
    { id: 5, title: 'A tanú', year: 1969, src: 'images/movie05.jpg', desc: `Banned for over a decade for its outspoken criticism of the post-WWII communist regime in Hungary, Péter Bacsó's 'The Witness' has since then achieved unparalleled cult status in its native...` },
    { id: 6, title: 'Vanilla Sky', year: 2001, src: 'images/movie06.jpg', desc: `A self-indulgent and vain publishing magnate finds his privileged life upended after a vehicular accident with a resentful lover.` },
    { id: 7, title: 'Fight Club', year: 1999, src: 'images/movie07.jpg', desc: `An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming an underground fight club that evolves into something much, much more.` },
  ]

  let actual = document.querySelector('.actual-pic');
  let title = document.querySelector('.title');
  let year = document.querySelector('.year');
  let desc = document.querySelector('.desc');
  let left = document.querySelector('.left-arrow');
  let right = document.querySelector('.right-arrow');
  let imgIndex = 0;

  actual.setAttribute('style', `background-image: url('${images[0].src}')`);
  title.innerText = images[0].title;
  year.innerText = images[0].year;
  desc.innerText = images[0].desc;

  document.querySelectorAll('.thumbnails img').forEach((element, index) => {
    element.addEventListener('click', () => {
      actual.setAttribute('style', `background-image: url('${images[index].src}')`);
      title.innerText = images[index].title;
      year.innerText = images[index].year;
      desc.innerText = images[index].desc;
      imgIndex = index;
      console.log(imgIndex);

      left.addEventListener('click', () => {
        imgIndex -= 1;
        if (imgIndex === -1) {
          imgIndex = document.querySelectorAll('.thumbnails img').length - 1;
        }
        actual.setAttribute('style', `background-image: url('${images[imgIndex].src}')`);
        title.innerText = images[imgIndex].title;
        year.innerText = images[imgIndex].year;
        desc.innerText = images[imgIndex].desc;
      });

      right.addEventListener('click', () => {
        imgIndex += 1;
        if (imgIndex === document.querySelectorAll('.thumbnails img').length) {
          imgIndex = 0;
        }
        actual.setAttribute('style', `background-image: url('${images[imgIndex].src}')`);
        title.innerText = images[imgIndex].title;
        year.innerText = images[imgIndex].year;
        desc.innerText = images[imgIndex].desc;
      });

    });
  });
}