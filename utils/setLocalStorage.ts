import getLocalStorage from './getLocalStorage';

const setLocalStorage = (key: string, value: string) => {
  const isBrowser = typeof window === 'object';
  if (!isBrowser) {
    return undefined;
  }
  const localStorageData = getLocalStorage('car');

  if (!localStorageData) {
    const car = {
      carData: {
        [key]: value,
      },
    };
    localStorage.setItem('car', JSON.stringify(car));
  } else {
    if (localStorageData.carData) {
      localStorageData.carData[key] = value;
    } else {
      const carData = {
        [key]: value,
      };
      localStorageData.push(carData);
    }

    localStorage.setItem('car', JSON.stringify(localStorageData));
  }
};

export default setLocalStorage;
