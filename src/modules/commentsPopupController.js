import {
  showCommentsPopUp,
  hideCommentsPopUp,
  updateCommentList,
} from './commentsPopupViewer.js';
import { postComment } from './involvementAPI.js';

function getShowID(id) {
  return id.substring(9);
}

export default function addEventListnersToTheCommentsButtons() {
  const comments = document.querySelectorAll('.comments');
  comments.forEach((el) => {
    el.addEventListener('click', async (event) => {
      event.target.disabled = true;
      await showCommentsPopUp(getShowID(event.target.id));
      event.target.disabled = false;
      document
        .querySelector('#close-popup-icon')
        .addEventListener('click', () => {
          hideCommentsPopUp();
        });
      document
        .querySelector('#comment-form')
        .addEventListener('submit', async (formEvent) => {
          formEvent.target.elements['comment-button'].disabled = true;
          formEvent.preventDefault();
          await postComment(
            getShowID(event.target.id),
            formEvent.target.elements.name.value,
            formEvent.target.elements.comment.value,
          );
          await updateCommentList(
            getShowID(event.target.id),
            formEvent.target.elements.name.value,
            formEvent.target.elements.comment.value,
          );
          formEvent.target.reset();
          formEvent.target.elements['comment-button'].disabled = false;
        });
    });
  });
}
