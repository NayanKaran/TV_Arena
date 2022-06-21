/* eslint-disable no-underscore-dangle */

function createCard(data) {
  const image = data._embedded.show.image.original;

  const mainContainer = document.querySelector('#home-page');
  const cardContainer = document.createElement('div');

  const titleLikesContainer = document.createElement('div');
  titleLikesContainer.classList.add('socials');

  const cardImg = document.createElement('img');
  cardImg.classList.add('card-img');
  cardImg.setAttribute('src', image);

  const title = document.createElement('p');
  title.textContent = data.name;

  const likes = document.createElement('i');
  likes.setAttribute('class', 'fa-regular fa-heart');
  likes.classList.add('likes');

  const countLikes = document.createElement('p');
  countLikes.classList.add('count-likes');
  countLikes.textContent = '5 Likes';

  const comment = document.createElement('button');
  comment.classList.add('comments');
  comment.textContent = 'Comments';
  comment.id = `comments-${data._embedded.show.id}`;

  titleLikesContainer.append(title, likes);
  cardContainer.append(cardImg, titleLikesContainer, countLikes, comment);
  mainContainer.appendChild(cardContainer);
}

export default createCard;