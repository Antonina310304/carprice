import { spacingStep } from '@styles/globalTheme/index.css';

/**
 * принимеает массив чисел, которые являются коэффициентом шага spacing
 * возвращает строку аккомулированную строку
 * если элемент !== 0, добавляет px к числу
 * */
export const spacing = (...params: number[]) => {
  return params.reduce((acc: string, item: number) => {
    if (item === 0) {
      return (acc = `${acc} 0 `);
    }
    return (acc = `${acc} ${item * spacingStep}px`);
  }, '');
};
