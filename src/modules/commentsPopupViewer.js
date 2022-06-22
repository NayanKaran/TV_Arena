import { getShowDetails } from './tvmazeAPI.js';
import { getComments } from './involvementAPI.js';

function getGenresString(genres) {
  let string = '';
  genres.forEach((element) => {
    string += ` | ${element}`;
  });
  return string.substring(3);
}

function getListElements(comments) {
  let innerHTML = '';
  if (comments.length) {
    comments.forEach((comment) => {
      innerHTML += `<li><span>${comment.creation_date} ${comment.username}: </span>${comment.comment}</li>`;
    });
  } else { innerHTML += '<li>Be the first to Comment!</li>'; }
  return innerHTML;
}

export async function showCommentsPopUp(showID) {
  const data = await getShowDetails(showID);
  const popUpElement = document.createElement('section');
  popUpElement.className = 'popup';
  popUpElement.id = 'comments-popup';
  popUpElement.innerHTML = `
    <i id="close-popup-icon"></i>
    <img
      src="${data.image.original}"
      alt="${data.name} Banner"
    />
    <h2>${data.name}</h2>
    <ul>
      <li><span>Genres: </span>${getGenresString(data.genres)}</li>
      <li><span>Created by: </span>Stephen King</li>
      <li><span>Network: </span>CBS</li>
      <li>
        <span>Official site: </span>
        <a href="http://www.cbs.com/shows/under-the-dome/">www.cbs.com</a>
      </li>
    </ul>
    `;
  document.querySelector('main').appendChild(popUpElement);
  const commentsSectionElement = document.createElement('section');
  const comments = await getComments(showID);
  commentsSectionElement.innerHTML = `
  <h3>Comments(${comments.length ? comments.length : '0'})</h3>
  <ul>
    ${getListElements(comments)}
  </ul>
  `;
  popUpElement.appendChild(commentsSectionElement);
}

export function hideCommentsPopUp() {
  document.querySelector('.popup').remove();
}