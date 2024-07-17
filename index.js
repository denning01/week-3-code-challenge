const BASE_URL = 'http://localhost:4000/films';

// Fetch and display movie details
async function fetchAndDisplayMovies() {
    //try is used to catch an error
    try {
        const response = await fetch(BASE_URL, { method: "GET" });
        if (response.ok) {
            const movies = await response.json();
            displayMovieDetails(movies[0]);
            populateMovieList(movies);
        } else {
            
            console.error('Failed to fetch movies:', response.statusText);
        }
        //if an error is caught a message is displayed
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

// Display movie details
function displayMovieDetails(movie) {
    const availableTickets = movie.capacity - movie.tickets_sold;

    document.getElementById('movie-poster').src = movie.poster;
    document.getElementById('movie-title').textContent = movie.title;
    document.getElementById('movie-runtime').textContent = `Runtime: ${movie.runtime} minutes`;
    document.getElementById('movie-showtime').textContent = `Showtime: ${movie.showtime}`;
    document.getElementById('movie-available-tickets').textContent = `Available Tickets: ${availableTickets}`;
    document.getElementById('movie-description').textContent = movie.description;

    const buyButton = document.getElementById('buy-ticket');
    buyButton.disabled = availableTickets <= 0;
    buyButton.textContent = availableTickets > 0 ? 'Buy Ticket' : 'Sold Out';
    buyButton.onclick = () => buyTicket(movie);
}

// Populate the movie list
function populateMovieList(movies) {
    const movieList = document.getElementById('films');
    movieList.innerHTML = ''; // Clear existing items

    movies.forEach(movie => {
        const movieItem = document.createElement('li');
        movieItem.textContent = movie.title;
        movieItem.classList.add('film', 'item');
        movieItem.onclick = () => displayMovieDetails(movie);
        movieList.appendChild(movieItem);
    });
}

// Handle ticket purchase
//if all the tickets have been purchased it displays a sold out message
function buyTicket(movie) {
    if (movie.tickets_sold < movie.capacity) {
        movie.tickets_sold++;
        displayMovieDetails(movie);
    } else {
        alert('Sorry, this showing is sold out!');
    }
}

// Initialize the app
window.onload = fetchAndDisplayMovies;
