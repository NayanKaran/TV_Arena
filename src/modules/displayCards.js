import createCard from './createCardUI.js';
import addEventListnersToTheCommentsButtons from './commentsPopupController.js';

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
  addEventListnersToTheCommentsButtons();
};
export default displayData;