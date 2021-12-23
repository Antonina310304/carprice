import { style } from '@vanilla-extract/css';

// eslint-disable-next-line import/prefer-default-export
export const mainWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: 1,
  minHeight: '100vh',
});
