document.getElementById('application-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // You can perform form validation and submission logic here
    // For demonstration purposes, let's just log the form data
    const formData = new FormData(this);
    formData.forEach(function(value, key) {
      console.log(key + ': ' + value);
    });
  });
  