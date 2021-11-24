import { style } from '@vanilla-extract/css';

export const inner = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const listWrapper = style({
  width: '100%',
  maxHeight: '100%',
  overflowY: 'auto',
});

export const locationIcon = style({
  display: 'inline-block',
  width: '14px',
  height: '18px',
  marginRight: '13px',
});

export const header = style({
  paddingBottom: '10px',
});

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  margin: '-5px',
});

export const titleCity = style({
  display: 'inline-block',
  margin: '5px',
});

export const regionWrapper = style({
  display: 'inline-flex',
  alignItems: 'center',
  margin: '5px',
});

export const selectedRegion = style({
  display: 'inline-block',
  margin: '0',
});
