const arrayToObj = (array: any) => {
  return array.reduce((acc, item, idx) => {
    acc.push({ value: idx, text: item });
    return acc;
  }, []);
};

export default arrayToObj;
