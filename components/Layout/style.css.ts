import { style } from '@vanilla-extract/css';

export const mainWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: 1,
  minHeight: '100vh',
});
