const itemNumber = async (data) => {
  const movies = data;
  const today = document.querySelector('.list').firstElementChild;
  today.textContent = `Today (${movies.length})`;
};

export default itemNumber;