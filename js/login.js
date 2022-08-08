var credentials = [
    {
        "id": "lakshay846",
        "user": "user1",
        "pass": "pass1"
    },
    {
        "id": "RandomUser2",
        "user": "user2",
        "pass": "pass2"
    },
    {
        "id": "RandomUser3",
        "user": "user3",
        "pass": "pass3"
    }
]

function login(e) {
    console.log('Hello')
    let user = document.getElementById('username').value;
    let pass = document.getElementById('pwd').value;
    if(user === 'user1' && pass === 'pass1' || user === 'user2' && pass === 'pass2' ||user === 'user3' && pass === 'pass3' ) {
        sessionStorage.setItem("isLoggedIn", true);
    }
    
}