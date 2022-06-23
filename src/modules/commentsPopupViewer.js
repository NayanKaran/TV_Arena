/* eslint-disable no-underscore-dangle */

import { data } from './tvmazeAPI.js';
import { getComments, getNumberOfComments } from './involvementAPI.js';

function getShowdata(episodeId) {
  return data.movies.find((episode) => episode.id === Number(episodeId));
}

function getListElements(comments) {
  let innerHTML = '';
  if (comments.length) {
    comments.forEach((comment) => {
      innerHTML += `<li><span>${comment.creation_date} ${comment.username}: </span>${comment.comment}</li>`;
    });
  } else {
    innerHTML += "<li id='add-comment-message'>Be the first to Comment!</li>";
  }
  return innerHTML;
}

export async function updateCommentList(episodeId, name, comment) {
  if (document.getElementById('add-comment-message')) { document.getElementById('add-comment-message').remove(); }
  document.getElementById('comments-header').innerText = `Comments(${getNumberOfComments(episodeId)})`;
  const commentElement = document.createElement('li');
  commentElement.innerHTML = `<span>${new Date()
    .toISOString()
    .substring(0, 10)} ${name}: </span>${comment}`;
  document.getElementById('comment-list').appendChild(commentElement);
}

export async function showCommentsPopUp(episodeId) {
  const episode = getShowdata(episodeId);
  if (document.querySelector('.popup')) { document.querySelector('.popup').remove(); }
  {
    const popUpElement = document.createElement('section');
    popUpElement.className = 'popup';
    popUpElement.id = 'comments-popup';
    popUpElement.innerHTML = `
    <i id="close-popup-icon"></i>
    <img
      src="${episode._embedded.show.image.original}" 
      alt="${episode.name} Banner"
    />
    <h2>${episode.name}</h2>
    <ul>
      <li><span>Air Date: </span>${
  episode.airdate ? episode.airdate : 'N/A'
}</li>
      <li><span>Air Time: </span>${
  episode.airtime ? episode.airtime : 'N/A'
}</li>
      <li><span>Runtime: </span>${
  episode.runtime ? episode.runtime : 'N/A'
}</li>
      <li><span>Rating: </span>${
  episode.rating.average ? episode.rating.average : 'N/A'
}</li>
    </ul>
    `;
    document.querySelector('main').appendChild(popUpElement);
    const commentsSectionElement = document.createElement('section');
    commentsSectionElement.innerHTML = `
    <h3 id="comments-header">Comments</h3>
    <ul id="comment-list">
      <li id='add-comment-message'>Fetching comments from server...</li>
    </ul>
    `;
    popUpElement.appendChild(commentsSectionElement);
    {
      const addCommentSectionElement = document.createElement('section');
      addCommentSectionElement.id = 'add-comment-section';
      addCommentSectionElement.innerHTML = `
      <h3>Add a Comment</h3>
      <form id="comment-form">
        <input type="text" name="name" id="comment-user" required placeholder="Your name"><br>
        <textarea name="comment" id="comment-text" cols="30" rows="10" placeholder="Your insights" required></textarea><br>
        <button type="submit" id="comment-button">Comment</button>
      </form>
      `;
      popUpElement.appendChild(addCommentSectionElement);
    }
    const comments = await getComments(episodeId);
    commentsSectionElement.innerHTML = `
      <h3 id="comments-header">Comments(${
  comments.length ? comments.length : '0'
})</h3>
      <ul id="comment-list">
        ${getListElements(comments)}
      </ul>
      `;
  }
}

export function hideCommentsPopUp() {
  document.querySelector('.popup').remove();
}
