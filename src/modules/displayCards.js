import createCard from './createCardUI.js';
import addEventListnersToTheCommentsButtons from './commentsPopupController.js';
import displayLikes from './getLikes.js';
import postData from './postLikes.js';

export const getData = async (url) => {
  const response = await fetch(url);
  const movies = response.json();
  return movies;
};

export const displayData = async () => {
  const apiUrl = `https://api.tvmaze.com/schedule/web?date=${new Date().toISOString().slice(0, 10)}&country=US`;
  let data = [];
  data = await getData(apiUrl);
  data.forEach((card) => {
    createCard(card);
  });
  displayLikes();
  addEventListnersToTheCommentsButtons();
  postData();
  const cards = document.querySelectorAll('.card');
  const today = document.querySelector('.list').firstElementChild;
  today.classList.add('highlight');
  today.innerHTML = '';
  const todayText = document.createElement('a');
  todayText.innerHTML = `Today (${cards.length})`;
  today.append(todayText);
};
