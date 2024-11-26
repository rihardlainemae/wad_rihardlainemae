function validatePassword() {
    const password = document.getElementById('password').value;
    const validationMessage = document.getElementById('validationMessage');
    const conditions = [
        { regex: /^.{8,14}$/, message: "at least 8 chars and less than 15 chars" },
        { regex: /[A-Z]/, message: "at least one uppercase alphabet character" },
        { regex: /[a-z].*[a-z]/, message: "at least two lowercase alphabet characters" },
        { regex: /\d/, message: "at least one numeric value" },
        { regex: /^[A-Z]/, message: "start with an uppercase alphabet" },
        { regex: /_/, message: "include the character '_'" }
    ];

    const failedConditions = conditions.filter(condition => !condition.regex.test(password));
    if (failedConditions.length > 0) {
        validationMessage.innerHTML = `The password is not valid:<br>${failedConditions.map(c => `- ${c.message}`).join('<br>')}`;
    } else {
        window.location.href = 'index.html';
    }
};
document.getElementById('signupButton').addEventListener('click', function() {
    const email = document.querySelector('input[name="email"]').value;
    
    
    if (email == "" || password == "") {
        alert("Please fill in both fields.");
    }   
    if (failedConditions.length > 0) {
        validationMessage.innerHTML = `The password is not valid:<br>${failedConditions.map(c => `- ${c.message}`).join('<br>')}`;
    }
    if (email != "" || failedConditions.length === 0) {
        window.location.href = 'index.html';
    }
});