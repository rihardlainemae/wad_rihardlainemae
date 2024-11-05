document.getElementById('addPostButton').addEventListener('click', function() {
    const body = document.querySelector('textarea#post-body').value;
    const fileInput = document.querySelector('input[name="file-upload"]');
    const file = fileInput.files.length > 0 ? fileInput.files[0] : null;
    
    if (body.trim() === "" && !file) {
        alert("Cannot create an empty post.");
    } else {
        window.location.href = 'index.html';
    }
});