const postData = () => {
  const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/a2tSbPCwHIrhAyfjwKEq/likes';
  const likespara = document.querySelectorAll('.likes');

  likespara.forEach((item) => {
    item.addEventListener('click', () => {
      const postInfo = async () => {
        const likesCount = item.nextElementSibling;
        const heartIcon = likesCount.previousElementSibling;
        item.classList.add('liked');
        heartIcon.classList.remove('fa-regular');
        heartIcon.classList.add('fa-solid');
        const heart = likesCount.id;
        likesCount.textContent = Number(likesCount.textContent) + 1;

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            item_id: heart,
          }),
        });
        const responseMessage = await response.text();
        return responseMessage;
      };
      if (!item.classList.contains('liked')) postInfo();
    });
  });
};

export default postData;
