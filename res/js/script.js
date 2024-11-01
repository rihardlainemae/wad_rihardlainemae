document.getElementById('loginButton').addEventListener('click', function() {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    
    if (email === "" || password === "") {
        alert("Please fill in both fields.");
    } else {
        window.location.href = 'index.html';
    }
});
document.getElementById('profile-pic').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});



// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.closest('#profilepicture')) {
        document.getElementById('dropdownMenu').classList.remove('show');
    }
};
