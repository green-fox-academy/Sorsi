'use strict';
window.onload = () => {
    const host = 'http://localhost:3000';

    const http = new XMLHttpRequest();
    http.open('GET', `${host}/api/posts`, true);

    http.onload = () => {
        const result = JSON.parse(http.responseText);
        console.log(result.posts[0]);

        /* let owner = result.posts[0].owner; */

        const content = document.querySelector('.content');

        result.posts.forEach(post => {
            let modify = document.createElement('button');
            modify.innerText = 'Modify';
            modify.setAttribute('id', 'modify');
            let remove = document.createElement('button');
            remove.innerText = 'Remove';
            remove.setAttribute('class', 'remove');
            remove.dataset.id = post.id;

            remove.addEventListener('click', (e) => {
                const http3 = new XMLHttpRequest();
                http3.open('DELETE', `${host}/api/posts/${post.id}`, true);
                http3.send();
                location.reload(); //újratölti az oldalt automatikusan
            });

            let p = document.createElement('p');
            let downVoteButton = document.createElement('button');
            downVoteButton.setAttribute('class', 'down');

            downVoteButton.addEventListener('click', (e) => {
                const http4 = new XMLHttpRequest();
                http4.open('PUT', `${host}/api/posts/${post.id}/downvote`, true);
                http4.onload = () => {
                    location.reload();
                }
                http4.send();
            });

            let upVoteButton = document.createElement('button');
            upVoteButton.setAttribute('class', 'up');

            upVoteButton.addEventListener('click', (e) => {
                const http5 = new XMLHttpRequest();
                http5.open('PUT', `${host}/api/posts/${post.id}/upvote`, true);
                http5.onload = () => {
                    location.reload();
                }
                http5.send();
            });

            let votingButtonsContainer = document.createElement('div');
            votingButtonsContainer.setAttribute('class', 'vote-container');
            p.setAttribute('class', 'post-container');
            let mainButtonsContainer = document.createElement('div')
            mainButtonsContainer.setAttribute('class', 'main-buttons-container');

            let contentContainer = document.createElement('div');
            contentContainer.setAttribute('class', 'content-container');

            let title = document.createElement('h1');
            title.innerText = post.title;

            let timestamp = document.createElement('h4');
            timestamp.innerText = post.timestamp;

            let url = document.createElement('a');
            url.innerText = post.url;
            url.setAttribute('href', 'post.url');

            let score = document.createElement('h3');
            score.innerText = post.score;

            p.appendChild(votingButtonsContainer);
            p.appendChild(contentContainer);
            contentContainer.appendChild(title);
            contentContainer.appendChild(timestamp);
            contentContainer.appendChild(url);
            contentContainer.appendChild(mainButtonsContainer);
            mainButtonsContainer.appendChild(remove);
            mainButtonsContainer.appendChild(modify);
            votingButtonsContainer.appendChild(upVoteButton);
            votingButtonsContainer.appendChild(score);
            votingButtonsContainer.appendChild(downVoteButton);
            content.appendChild(p);
        });

        const http2 = new XMLHttpRequest();
        http2.open('POST', `${host}/api/posts`, true);

        http2.setRequestHeader('Content-Type', 'application/json');

        let postForm = document.querySelector('.post-form');

        postForm.addEventListener('submit', (e) => {
            e.preventDefault(); //megállítja a form alapműködését ()
            console.log(e.target.elements.title.value)

            http2.send(JSON.stringify({
                title: e.target.elements.title.value,
                url: e.target.elements.url.value,
            }));
            http2.onload = () => { //request után csinálja a következő sor utasításait
                location.reload();
            }
        });


    };

    http.send();

}