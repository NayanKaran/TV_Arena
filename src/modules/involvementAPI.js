const appID = 'Ma3sHwXO14HbNtIMnTiR';

export async function getComments(showID) {
  try {
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments?item_id=${showID}`,
      {
        method: 'GET',
      },
    );
    const showDetails = await response.json();
    return showDetails;
  } catch (error) {
    return [];
  }
}

export async function postComment(showId, name, comment) {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: showId,
        username: name,
        comment,
      }),
    },
  );
  const reponseText = await response.text();
  return reponseText;
}