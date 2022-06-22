const getLikes = async () => {
  const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/a2tSbPCwHIrhAyfjwKEq/likes';
  const response = await fetch(apiUrl);
  const data = response.json();
  return data;
};

const displayLikes = async () => {
  const likes = await getLikes();
  likes.forEach((item) => {
    const likespara = document.getElementById(`${item.item_id}`);
    if (item.item_id) {
      likespara.textContent = `${item.likes}`;
    }
  });
};

export default displayLikes;