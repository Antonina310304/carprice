import { spacingStep } from '@styles/globalTheme/index.css';

/**
 * возвращает объект с одним ключем padding cо сторовым значением значением
 * если число !== 0, добавляет px к числу
 * */
export const padding = (...params: number[]) => {
  return {
    padding: params.reduce((acc: string, item: number) => {
      if (item == 0) {
        acc = `${acc} 0 `;
      } else {
        acc = `${acc} ${item * spacingStep}px`;
      }
      return acc;
    }, ''),
  };
};
