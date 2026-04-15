const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");

const API_KEY = "6d207374";

searchInput.addEventListener("input", handleSearch);

async function handleSearch(event) {
  const query = event.target.value.trim();

  if (query.length === 0) {
    results.innerHTML = `<p class="message">Start typing to search for movies</p>`;
    return;
  }

  if (query.length < 2) {
    results.innerHTML = `<p class="message">Please enter at least 2 characters</p>`;
    return;
  }

  results.innerHTML = `<p class="message">Loading...</p>`;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    if (data.Response === "False") {
      results.innerHTML = `<p class="message">No movies found</p>`;
      return;
    }

    renderMovies(data.Search);
  } catch (error) {
    results.innerHTML = `<p class="message">Something went wrong. Please try again later.</p>`;
    console.error(error);
  }
}

function renderMovies(movies) {
  results.innerHTML = movies
    .map((movie) => {
      const poster =
        movie.Poster !== "N/A"
          ? movie.Poster
          : "https://via.placeholder.com/300x450?text=No+Image";

      return `
        <div class="movie-card">
          <img class="movie-poster" src="${poster}" alt="${movie.Title}" />
          <div class="movie-info">
            <h2 class="movie-title">${movie.Title}</h2>
            <p class="movie-text"><strong>Year:</strong> ${movie.Year}</p>
            <p class="movie-text"><strong>Type:</strong> ${movie.Type}</p>
          </div>
        </div>
      `;
    })
    .join("");
}
