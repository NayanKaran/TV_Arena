import { getNumberOfItems } from './tvmazeAPI.js';

const displayItemNumber = async () => {
  getNumberOfItems();
  const today = document.querySelector('.list').firstElementChild;
  today.textContent = `Today (${getNumberOfItems()})`;
};

export default displayItemNumber;