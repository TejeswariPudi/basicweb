document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulate searching for trains (replace with backend API call)
    var departure = document.getElementById('departure').value;
    var destination = document.getElementById('destination').value;
    var date = document.getElementById('date').value;
    var passengers = document.getElementById('passengers').value;

    // Display search results (replace with actual results from backend)
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Search Results</h2>
        <p>Departure: ${departure}</p>
        <p>Destination: ${destination}</p>
        <p>Date: ${date}</p>
        <p>Passengers: ${passengers}</p>
    `;
    resultsDiv.style.display = 'block';
});
