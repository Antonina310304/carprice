const getDate = (date: string) => {
  const monthNames = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  const numberDay = new Date(date).getDate();
  const numberMonth = new Date(date).getMonth();
  return `${numberDay} ${monthNames[numberMonth]}`;
};

export default getDate;
