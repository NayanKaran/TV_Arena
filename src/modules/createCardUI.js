function createCard() {
  const mainContainer = document.querySelector('#home-page');
  const cardContainer = document.createElement('div');

  const titleLikesContainer = document.createElement('div');
  titleLikesContainer.classList.add('socials');

  const cardImg = document.createElement('img');
  cardImg.classList.add('card-img');

  const title = document.createElement('p');
  title.textContent = 'Title';

  const likes = document.createElement('i');
  likes.setAttribute('class', 'fa-regular fa-heart');
  likes.classList.add('likes');

  const countLikes = document.createElement('p');
  countLikes.classList.add('count-likes');
  countLikes.textContent = '5 Likes';

  const comment = document.createElement('button');
  comment.classList.add('comments');
  comment.textContent = 'Comments';

  titleLikesContainer.append(title, likes);
  cardContainer.append(cardImg, titleLikesContainer, countLikes, comment);
  mainContainer.appendChild(cardContainer);
}

export default createCard;