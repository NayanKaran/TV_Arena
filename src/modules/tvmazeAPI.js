export const data = {};

export function getNumberOfItems() {
  return data.movies.length;
}

export const getShowsInfo = async () => {
  const response = await fetch(`https://api.tvmaze.com/schedule/web?date=${new Date().toISOString().substring(0, 10)}&country=US`);
  const movies = await response.json();
  data.movies = movies;
  return movies;
};
