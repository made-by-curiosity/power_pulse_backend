const formatToday = () => {
  const timeToday = Date.now();
  const date = new Date(timeToday);
  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

module.exports = formatToday;