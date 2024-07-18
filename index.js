// Base URL for the films API
const BASE_URL = 'http://localhost:4000/films';

// Fetch and display movie details
async function fetchAndDisplayMovies() {
    try {
        // Fetch movies from the API using GET method
        const response = await fetch(BASE_URL, { method: "GET" });

        // Check if the response is successful
        if (response.ok) {
            // Parse response body as JSON
            const movies = await response.json();

            // Display details of the first movie
            displayMovieDetails(movies[0]);

            // Populate the movie list with all fetched movies
            populateMovieList(movies);
        } else {
            // Log an error if fetching movies fails
            console.error('Failed to fetch movies:', response.statusText);
        }
    } catch (error) {
        // Log an error if an exception occurs during fetching
        console.error('Error fetching movies:', error);
    }
}


// Displays movie details based on the provided movie object
function displayMovieDetails(movie) {
    // Calculates the number of available tickets
    const availableTickets = movie.capacity - movie.tickets_sold;

    // Updates DOM elements with movie details
    document.getElementById('movie-poster').src = movie.poster;
    document.getElementById('movie-title').textContent = movie.title;
    document.getElementById('movie-runtime').textContent = `Runtime: ${movie.runtime} minutes`;
    document.getElementById('movie-showtime').textContent = `Showtime: ${movie.showtime}`;
    document.getElementById('movie-available-tickets').textContent = `Available Tickets: ${availableTickets}`;
    document.getElementById('movie-description').textContent = movie.description;

    // Update buy button state and behavior
    const buyButton = document.getElementById('buy-ticket');
    buyButton.disabled = availableTickets <= 0;  // Disable button if no tickets available
    buyButton.textContent = availableTickets > 0 ? 'Buy Ticket' : 'Sold Out';  // Change button text based on availability

    // Set onclick handler for the buy button to buyTicket function with current movie
    buyButton.onclick = () => buyTicket(movie);
}


// Populate the movie list with movie titles
function populateMovieList(movies) {
    const movieList = document.getElementById('films');
    movieList.innerHTML = ''; // Clear existing items

    // Iterate over each movie in the movies array
    movies.forEach(movie => {
        // Create a new list item for each movie
        const movieItem = document.createElement('li');
        movieItem.textContent = movie.title; // Set the text content to the movie title
        movieItem.classList.add('film', 'item'); // Add CSS classes for styling
        
        // Set the onclick handler to display movie details when clicked
        movieItem.onclick = () => displayMovieDetails(movie);

        // Append the movie item to the movie list
        movieList.appendChild(movieItem);
    });
}

// Handle ticket purchase
function buyTicket(movie) {
    // Check if tickets are still available
    if (movie.tickets_sold < movie.capacity) {
        // Increment the number of tickets sold
        movie.tickets_sold++;
        
        // Update the movie details displayed on the page
        displayMovieDetails(movie);
    } else {
        // If all tickets have been sold, display a sold-out message
        alert('Sorry, this showing is sold out!');
    }
}


// Initialize the app
window.onload = fetchAndDisplayMovies;
