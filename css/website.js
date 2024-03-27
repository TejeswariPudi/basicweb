document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('overlay').style.display = 'flex';
});

document.getElementById('overlay').addEventListener('click', function (e) {
    if (e.target.id === 'overlay') {
        document.getElementById('overlay').style.display = 'none';
    }
});

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    
    // Get username input value
    var username = document.querySelector('input[type="text"]').value;
    
    // Display user details form
    var userDetailsForm = document.createElement('div');
    userDetailsForm.classList.add('user-details-form');
    
    var nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Enter your name';
    userDetailsForm.appendChild(nameLabel);
    userDetailsForm.appendChild(nameInput);
    userDetailsForm.appendChild(document.createElement('br'));
    
    var addressLabel = document.createElement('label');
    addressLabel.textContent = 'Address:';
    var addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'Enter your address';
    userDetailsForm.appendChild(addressLabel);
    userDetailsForm.appendChild(addressInput);
    userDetailsForm.appendChild(document.createElement('br'));
    
    var ageLabel = document.createElement('label');
    ageLabel.textContent = 'Age:';
    var ageInput = document.createElement('input');
    ageInput.type = 'text';
    ageInput.placeholder = 'Enter your age';
    userDetailsForm.appendChild(ageLabel);
    userDetailsForm.appendChild(ageInput);
    userDetailsForm.appendChild(document.createElement('br'));
    
    var genderLabel = document.createElement('label');
    genderLabel.textContent = 'Gender:';
    var genderSelect = document.createElement('select');
    var option1 = document.createElement('option');
    option1.value = 'male';
    option1.textContent = 'Male';
    var option2 = document.createElement('option');
    option2.value = 'female';
    option2.textContent = 'Female';
    genderSelect.appendChild(option1);
    genderSelect.appendChild(option2);
    userDetailsForm.appendChild(genderLabel);
    userDetailsForm.appendChild(genderSelect);
    userDetailsForm.appendChild(document.createElement('br'));
    
    var submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    userDetailsForm.appendChild(submitButton);
    
    document.querySelector('.login-popup').innerHTML = ''; // Clear form
    document.querySelector('.login-popup').appendChild(userDetailsForm);
});
