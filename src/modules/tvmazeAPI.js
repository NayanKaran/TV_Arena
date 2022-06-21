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

export async function getShows() {
  // To be implemented
}
