function login() {
    const username = document.getElementById('us').value;
    const password = document.getElementById('pass').value;

    if (username == "Yadav" && password == "0000") {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid Login detail rightusername=Yadav and pass=0000');
    }
}