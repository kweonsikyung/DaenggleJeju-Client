import { style } from '@vanilla-extract/css';

export const button = style({
  display: 'inline-block',
  cursor: 'pointer',
  border: 0,
  borderRadius: '3em',
  fontWeight: 700,
  lineHeight: 1,
  fontFamily: `'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
});

export const primary = style({
  backgroundColor: '#555ab9',
  color: 'white',
});

export const secondary = style({
  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
  backgroundColor: 'transparent',
  color: '#333',
});

export const small = style({
  padding: '10px 16px',
  fontSize: 12,
});

export const medium = style({
  padding: '11px 20px',
  fontSize: 14,
});

export const large = style({
  padding: '12px 24px',
  fontSize: 16,
});
