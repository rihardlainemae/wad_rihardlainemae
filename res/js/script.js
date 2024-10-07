document.getElementById('loginButton').addEventListener('click', function() {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    
    if (email === "" || password === "") {
        alert("Please fill in both fields.");
    } else {
        window.location.href = 'index.html';
    }
});