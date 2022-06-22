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

export function postComment() {
  // to be implemented
}