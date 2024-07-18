First, copy the json data in the link to the json file.

Movie Booking Web Application
This project is a simple web application that allows users to view movie details, check ticket availability, and purchase tickets for a specific movie.

Features
Movie List: Displays a list of available movies.
Movie Details: Shows details of the selected movie, including poster, title, runtime, showtime, description, and the number of available tickets.
Ticket Purchase: Allows users to buy tickets for a movie if tickets are available.
Dynamic Updates: Updates the movie details and ticket availability dynamically as users interact with the app.



Technologies Used
HTML: Structure of the web application.
CSS: Styling the web application.
JavaScript: Functionality of the web application.
Fetch API: Interacting with the backend to fetch movie data.
JSON server running at http://localhost:4000/films.


View Movies:

The movie list on the left displays the available movies.
Click on a movie title to view its details.
Check Ticket Availability:

The movie details section shows the number of available tickets for the selected movie.
Purchase Tickets:

Click the "Buy Ticket" button to purchase a ticket.
The button will be disabled and show "Sold Out" if no tickets are available.

File Structure

index.html: Main HTML file for the web application.

index.css: CSS file for styling the web application.

index.js: JavaScript file containing the application logic.

JavaScript Code Overview
fetchAndDisplayMovies: Fetches the movie data from the server and displays the details of the first movie in the list. Also populates the movie list.
displayMovieDetails: Updates the movie details section with information about the selected movie and sets up the "Buy Ticket" button.
populateMovieList: Creates a list of movies and sets up click handlers to display details of the selected movie.

buyTicket: Handles the ticket purchase logic. If tickets are available, it increments the tickets sold and updates the movie details.
