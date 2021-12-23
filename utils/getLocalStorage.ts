const getLocalStorage = (key: string) => {
  const isBrowser = typeof window === 'object';
  if (!isBrowser) {
    return undefined;
  }
  const localStorageData = localStorage.getItem(key);
  if (localStorageData) {
    return JSON.parse(localStorageData);
  }
  return undefined;
};

export default getLocalStorage;
