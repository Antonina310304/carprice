import { spacingStep } from '@styles/globalTheme/index.css';

/**
 * возвращает объект с одним ключем padding cо сторовым значением значением
 * если число !== 0, добавляет px к числу
 * */
const padding = (...params: number[]) => ({
  padding: params.reduce((acc: string, item: number) => ((item === 0)
    ? `${acc} 0 `
    : `${acc} ${item * spacingStep}px`), ''),
});

export default padding;
