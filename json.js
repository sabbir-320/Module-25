const person = {
    name: "Mukit",
    id: 23,
    age: 10,
    friends: ["Ali", "umor"],
    lover: {
        name: "PQ",
        age: 20
    }
}
// object to JSON
const conToJson = JSON.stringify(person)
// console.log(conToJson);
// JSON to object
const JsonToCon = JSON.parse(conToJson);
// console.log(JsonToCon);

// how to get data
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => displayUsers(json))

function displayUsers(users) {
    const name = users.map(x => x.username)
    const ul = document.getElementById('demo');
    for (let i = 0; i < name.length; i++) {
        const element = name[i];
        const line = document.createElement('p');
        line.innerText = element;
        ul.appendChild(line);
    }
}

// how to post data
document.querySelector('#btn').addEventListener('click', () => {
    const nameInput = document.querySelector('#name-input').value;
    const emailInput = document.querySelector('#email-input').value;
    const post = { name: nameInput, email: emailInput }
    displayInput(post)
})


function displayInput(postInfo) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
}




