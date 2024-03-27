const likeBtn = document.getElementById('likeBtn');
const messageElement = document.getElementById('message');

likeBtn.addEventListener('click', function() {
    // Simulate liking a post on Instagram
    simulateLike();
});

function simulateLike() {
    // Simulate liking process (e.g., making an API call)
    // For demonstration purposes, we'll just display a message
    messageElement.textContent = 'Post liked successfully!';
}
