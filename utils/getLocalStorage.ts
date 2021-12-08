const getLocalStorage = (key: string) => {
  const isBrowser = typeof window === 'object';
  if (!isBrowser) {
    return undefined;
  }
  const localStorageData = localStorage.getItem(key);
  if (localStorageData) {
    return JSON.parse(localStorageData);
  } else {
    return undefined;
  }
};

export default getLocalStorage;
