import { getData } from './displayCards';

const itemNumber = async () => {
  let movies = [];
  movies = await getData();
  const today = document.querySelector('.list').firstElementChild;
  today.textContent = `Today (${movies.length})`;
};

export default itemNumber;