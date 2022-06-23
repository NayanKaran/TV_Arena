const appID = 'Ma3sHwXO14HbNtIMnTiR';

let numberOfComments = 0;

export function getNumberOfComments() {
  return numberOfComments;
}

export async function getComments(showID) {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments?item_id=${showID}`,
    {
      method: 'GET',
    },
  );
  if (!response.ok) {
    return [];
  }
  const comments = await response.json();
  numberOfComments = comments.length;
  return comments;
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
  const responseText = await response.text();
  if (responseText === 'Created') {
    numberOfComments+=1;
  }
  return responseText;
}