import { showCommentsPopUp, hideCommentsPopUp } from './commentsPopupViewer.js';

function getShowID(id) {
  return id.substring(9);
}

export default function addEventListnersToTheCommentsButtons() {
  const comments = document.querySelectorAll('.comments');
  comments.forEach((el) => {
    el.addEventListener('click', async (event) => {
      await showCommentsPopUp(getShowID(event.target.id));
      document.querySelector('#close-popup-icon').addEventListener('click', () => {
        hideCommentsPopUp();
      });
    });
  });
}