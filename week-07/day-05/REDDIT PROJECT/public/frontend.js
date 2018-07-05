'use strict';
window.onload = () => {
    const host = 'http://localhost:3000';

    const http = new XMLHttpRequest();
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
        
    }

    http.open('GET', `${host}/api/posts`, true);
    http.send();

}