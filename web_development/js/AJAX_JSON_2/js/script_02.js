document.getElementById('button1').addEventListener('click', loadUser);
document.getElementById('button2').addEventListener('click', loadUsers);


function loadUser() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'js/user.json', true);

    xhr.onload = function () {
        if (this.status == 200) {
            let user = document.getElementById('user');
            let userData = JSON.parse(this.responseText);
            msg = `<ul>
                        <li>Name: ${userData.name}</li>
                        <li>ID: ${userData.id}</li>
                        <li>Email: ${userData.email}</li>
                    </ul>`
            user.innerHTML = msg;
        }
    }

    xhr.send();
}

function loadUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'js/users.json', true);

    xhr.onload = function () {
        if (this.status == 200) {
            var users = JSON.parse(this.responseText);
            var output = '';
            for(var i = 0; i < users.length; i++){
                output += `<ul>
                    <li>ID: ${users[i].id}</li>
                    <li>Name: ${users[i].name}</li>
                    <li>Email: ${users[i].email}</li>
                </ul>`;

                /*output += '<ul>' + 
                '<li>ID: ' + users[i].id +  '</li>' + 
                '<li>Name: ' + users[i].name +  '</li>' + 
                '<li>Email: ' + users[i].email +  '</li>' + 
                '</ul>';*/
            }
            document.getElementById('users').innerHTML = output;
        }
    }

    xhr.send();
}