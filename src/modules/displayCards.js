import createCard from './createCardUI.js';
import addEventListnersToTheCommentsButtons from './commentsPopupController.js';
import displayLikes from './getLikes.js';

const getData = async () => {
  const response = await fetch('https://api.tvmaze.com/schedule/web?date=2020-06-21&country=US');
  const movies = response.json();
  return movies;
};

const displayData = async () => {
  let data = [];
  data = await getData();

  data.forEach((card) => {
    createCard(card);
  });

  displayLikes();
  addEventListnersToTheCommentsButtons();
};

export default displayData;