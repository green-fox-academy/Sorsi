'use strict';
window.onload = () => {
    const host = 'http://localhost:3000';

    const http = new XMLHttpRequest();
    http.open('GET', `${host}/api/posts`, true);

    http.onload = () => {
        const result = JSON.parse(http.responseText);
        console.log(result.posts[0]);

        let owner = result.posts[0].owner;

        const content = document.querySelector('.content');

        result.posts.forEach(post => {
            let modify = document.createElement('button');
            modify.innerText = 'Modify';
            let remove = document.createElement('button');
            remove.innerText = 'Remove';
            let p = document.createElement('p');

            let title = document.createElement('h1');
            title.innerText = post.title;

            let timestamp = document.createElement('h4');
            timestamp.innerText = post.timestamp;

            let url = document.createElement('h6');
            url.innerText = post.url;

            let score = document.createElement('h3');
            score.innerText = post.score;

            p.appendChild(title);
            p.appendChild(timestamp);
            p.appendChild(url);
            p.appendChild(score);
            p.appendChild(modify);
            p.appendChild(remove);
            content.appendChild(p);
        });
    };
    http.send();

    const http2 = new XMLHttpRequest();
    http2.open('POST', `${host}/api/posts`, true);

    http2.setRequestHeader('Content-Type', 'application/json');

    http2.onload = () => {
        const response = JSON.parse(http2.responseText);
        console.log(response)
    };

    let postForm = document.querySelector('.post-form');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault(); //megállítja a form alapműködését ()
        console.log(e.target.elements.title.value)

        http2.send(JSON.stringify({
            title: e.target.elements.title.value,
            url: e.target.elements.url.value,
        }));
    });

}