import { getShowDetails } from "./tvmazeAPI.js";
import { getComments } from "./involvementAPI.js";

function getGenresString(genres) {
  let string = "";
  genres.forEach((element) => {
    string += ` | ${element}`;
  });
  return string.substring(3);
}

function getListElements(comments) {
  let innerHTML = "";
  if (comments.length) {
    comments.forEach((comment) => {
      innerHTML += `<li><span>${comment.creation_date} ${comment.username}: </span>${comment.comment}</li>`;
    });
  } else {
    innerHTML += "<li id='add-comment-message'>Be the first to Comment!</li>";
  }
  return innerHTML;
}

export async function updateCommentList(showID) {
  const comments = await getComments(showID);
  document.getElementById('comments-header').innerText = `Comments(${comments.length ? comments.length : "0"})`
  document.getElementById('comment-list').innerHTML = `${getListElements(comments)}`
}

export async function showCommentsPopUp(showID) {
  if (document.querySelector(".popup"))
    document.querySelector(".popup").remove();
  const data = await getShowDetails(showID);
  {
    const popUpElement = document.createElement("section");
    popUpElement.className = "popup";
    popUpElement.id = "comments-popup";
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
    {
      const commentsSectionElement = document.createElement("section");
      const comments = await getComments(showID);
      commentsSectionElement.innerHTML = `
    <h3 id="comments-header">Comments(${comments.length ? comments.length : "0"})</h3>
    <ul id="comment-list">
      ${getListElements(comments)}
    </ul>
    `;
      popUpElement.appendChild(commentsSectionElement);
    }
    {
      const addCommentSectionElement = document.createElement("section");
      addCommentSectionElement.id = 'add-comment-section';
      addCommentSectionElement.innerHTML = `
      <h3>Add a Comment</h3>
      <form id="comment-form">
        <input type="text" name="name" id="comment-user" required placeholder="Your name"><br>
        <textarea name="comment" id="comment-text" cols="30" rows="10" placeholder="Your insights" required></textarea><br>
        <button type="submit" id="comment-button">Comment</button>
      </form>
      `
      popUpElement.appendChild(addCommentSectionElement);
    }
    document.querySelector("main").appendChild(popUpElement);
  }
}

export function hideCommentsPopUp() {
  document.querySelector(".popup").remove();
}
