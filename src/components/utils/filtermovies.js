export const filterMovies = (movies, selectedGenre, searchQuery) => {
  if (selectedGenre) {
    return movies.filter((movie) => movie.genre._id === selectedGenre._id);
  }
  if (searchQuery) {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  return movies;
};
