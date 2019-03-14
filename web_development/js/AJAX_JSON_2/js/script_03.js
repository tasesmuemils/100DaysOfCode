document.getElementById('button').addEventListener('click', loadUsers);

function loadUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);

    xhr.onload = function() {
        if (xhr.status == 200) {
            var users = JSON.parse(this.responseText);
            var msg = '';
            for (let i = 0; i < users.length; i++) {
                msg += `<div class = "user">
                            <img src="${users[i].avatar_url}">
                            <ul>
                                <li>ID: ${users[i].id}</li>
                                <li>LOGIN: ${users[i].login}</li>
                            </ul>
                        </div>`
            }
            document.getElementById('users').innerHTML = msg;

        }
    }
    xhr.send();
}