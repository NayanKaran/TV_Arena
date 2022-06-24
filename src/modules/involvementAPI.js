const appID = 'Ma3sHwXO14HbNtIMnTiR';

const numberOfComments = {};

export function getNumberOfComments(episodeId) {
  return numberOfComments[episodeId];
}

export async function getComments(episodeId) {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments?item_id=${episodeId}`,
    {
      method: 'GET',
    },
  );
  if (!response.ok) {
    numberOfComments[episodeId] = 0;
    return [];
  }
  const comments = await response.json();
  numberOfComments[episodeId] = comments.length;
  return comments;
}

export async function postComment(episodeId, name, comment) {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: episodeId,
        username: name,
        comment,
      }),
    },
  );
  const responseText = await response.text();
  if (responseText === 'Created') {
    numberOfComments[episodeId] += 1;
  }
  return responseText;
}