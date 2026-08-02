// A dictionary map matching user inputs to their folder paths
const locationRoutes = {
    "entebbe": "../Districts/Entebbe/Entebbe.html",
    "kampala": "../Districts/Kampala/Kampala.html",
    "jinja": "../Districts/Jinja/Jinja.html"
    // You can easily add hundreds of lines here as your project grows!
};

// Select your search bar input from the DOM
const searchInput = document.querySelector('.textsearch');

// Listen for when a key is pressed down inside the input box
searchInput.addEventListener('keydown', function(event) {
    // Only trigger when the user hits the Enter key
    if (event.key === 'Enter') {
        // Grab the value, make it lowercase, and trim trailing spaces
        const query = searchInput.value.toLowerCase().trim();

        // Check if the typed location exists in our routes map
        if (locationRoutes[query]) {
            // Redirect the browser window to the matched file path
            window.location.href = locationRoutes[query];
        } else {
            alert("Location not found! Try searching for 'entebbe'.");
        }
    }
});
