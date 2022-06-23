export const data = {};

export async function getShowDetails(ID) {
  const response = await fetch(
    `https://api.tvmaze.com/shows/${ID}`,
    {
      method: 'GET',
    },
  );
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const showDetails = await response.json();
  return showDetails;
}

export const getShowsInfo = async () => {
  const response = await fetch('https://api.tvmaze.com/schedule/web?date=2020-06-21&country=US');
  const movies = await response.json();
  data.movies = movies;
  return movies;
};
