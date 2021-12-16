const arrayToObj = (array: any[]) => {
  return array.reduce((acc: any[], item: string, idx: number) => {
    acc.push({ value: idx, text: item });
    return acc;
  }, []);
};

export default arrayToObj;
