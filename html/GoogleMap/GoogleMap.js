// Initialize and display the map
var map = L.map('map').setView([40.7128, -74.0060], 10); // Example: New York City

// Add tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Optionally, add markers or other elements to the map
var marker = L.marker([40.7128, -74.0060]).addTo(map)
    .bindPopup('Hello World!'); // Popup text
