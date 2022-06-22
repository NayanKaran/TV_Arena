import createCard from './createCardUI.js';
import addEventListnersToTheCommentsButtons from './commentsPopupController.js';
import getLikes from './getLikes.js';


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

const displayLikes = async()=>{
    let likes = await getLikes();
    const likeId = document.querySelectorAll('.count-likes')
    
}
displayLikes()

export default displayData;