import { spacingStep } from '@styles/globalTheme/index.css';

/**
 * принимеает массив чисел, которые являются коэффициентом шага spacing
 * возвращает строку аккомулированную строку
 * если элемент !== 0, добавляет px к числу
 * */
const spacing = (...params: number[]) => params
  .reduce(
    (acc: string, item: number) => ((item === 0)
      ? `${acc} 0 `
      : `${acc} ${item * spacingStep}px`),
    '',
  );

export default spacing;
