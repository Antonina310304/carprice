export const getKeyByValue = (
  object: {
    [key: string]: any;
  },
  value: any
) => {
  return Object.keys(object).find((key) => object[key] === value);
};
