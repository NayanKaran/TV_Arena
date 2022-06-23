const itemNumber = async (data) => {
  let movies = data;
  const today = document.querySelector('.list').firstElementChild;
  today.textContent = `Today (${movies.length})`;
};

export default itemNumber;