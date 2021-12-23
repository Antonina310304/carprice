const getNameDay = (date: string) => {
  const nameDays = ['воскресенья', 'понедельника', 'вторника', 'среды', 'четверга', 'пятницы', 'субботы'];
  const numberDay = new Date(date).getDay();
  return nameDays[numberDay];
};

export default getNameDay;
