// Function to load content for different pages
function loadContent(page) {
    // Get reference to the content container
    const contentContainer = document.getElementById('content');

    // Clear previous content
    contentContainer.innerHTML = '';

    // Load content based on the selected page
    switch (page) {
        case 'home':
            contentContainer.innerHTML = '<h2>Welcome to Instagram Clone - Home Page</h2>';
            break;
        case 'explore':
            contentContainer.innerHTML = '<h2>Explore</h2>';
            break;
        case 'notifications':
            contentContainer.innerHTML = '<h2>Notifications</h2>';
            break;
        case 'profile':
            contentContainer.innerHTML = '<h2>Profile</h2>';
            break;
        case 'settings':
            contentContainer.innerHTML = '<h2>Settings</h2>';
            break;
        default:
            // Handle invalid page
            contentContainer.innerHTML = '<h2>Page not found</h2>';
            break;
    }
}

// Function to handle navigation
function navigateToPage(event) {
    // Prevent default link behavior
    event.preventDefault();

    // Remove active class from all links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
    });

    // Get the page ID
    const page = event.target.id.slice(0, -4); // Remove "Link" from the ID

    // Load content for the selected page
    loadContent(page);

    // Add active class to the clicked link
    event.target.classList.add('active');
}

// Add event listeners to navigation links
document.getElementById('homeLink').addEventListener('click', navigateToPage);
document.getElementById('exploreLink').addEventListener('click', navigateToPage);
document.getElementById('notificationsLink').addEventListener('click', navigateToPage);
document.getElementById('profileLink').addEventListener('click', navigateToPage);
document.getElementById('settingsLink').addEventListener('click', navigateToPage);

// Load home page by default
loadContent('home');
