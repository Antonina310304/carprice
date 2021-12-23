const getKeyByValue = (
  object: {
    [key: string]: any;
  },
  value: any,
) => Object.keys(object).find((key) => object[key] === value);

export default getKeyByValue;
