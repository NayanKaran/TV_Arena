const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3Y7HSVLcqPA4r09cNaET/likes');
  const data = response.json();
  return data;
};

const displayLikes = async () => {
  const likes = await getLikes();

  likes.forEach((item) => {
    const likespara = document.getElementById(`${item.item_id}`);
    likespara.textContent = `${item.likes} Likes`;
  });
};

export default displayLikes;