import createCard from './createCardUI.js';
import addEventListnersToTheCommentsButtons from './commentsPopupController.js';
import displayLikes from './getLikes.js';
import postData from './postLikes.js';
import { getShowsInfo } from './tvmazeAPI.js';
import itemNumber from './displayItemNumber.js';

const displayData = async () => {
  let data = [];
  data = await getShowsInfo();

  itemNumber(data);

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

export default displayData;