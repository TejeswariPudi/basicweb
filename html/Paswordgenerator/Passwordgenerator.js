const generateBtn = document.getElementById('generateBtn');
const passwordOutput = document.getElementById('passwordOutput');
const lengthInput = document.getElementById('lengthInput');

generateBtn.addEventListener('click', function() {
    const passwordLength = parseInt(lengthInput.value);
    if (isNaN(passwordLength) || passwordLength < 6 || passwordLength > 20) {
        alert('Password length must be between 6 and 20 characters.');
        return;
    }

    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=';
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    passwordOutput.value = password;
});
