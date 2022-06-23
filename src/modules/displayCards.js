import createCard from './createCardUI.js';
import addEventListnersToTheCommentsButtons from './commentsPopupController.js';
import displayLikes from './getLikes.js';
import postData from './postLikes.js';
import {getShowsInfo} from './tvmazeAPI.js';
import itemNumber from './displayItemNumber.js';

export const displayData = async () => {
  let data = [];
  data = await getShowsInfo();

  itemNumber(data);

  data.forEach((card) => {
    createCard(card);
  });

  displayLikes();
  addEventListnersToTheCommentsButtons();
  postData();
  return data;
};
