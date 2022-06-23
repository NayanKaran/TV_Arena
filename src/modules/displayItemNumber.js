

const itemNumber = async (data) => {
  const movies = data;
  const today = document.querySelector('.list').firstElementChild;
  today.textContent = `Today (${movies.length})`;
  return movies.length;
};

export default itemNumber;