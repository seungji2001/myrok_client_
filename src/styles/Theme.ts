const color = {
  primary: '#892DE6',
  primary500: '#A356F0',
  white: '#fff',
  red: '#ff5b5b',
  gray900: '#2b2b2b;',
  gray800: '#5c5b5b',
  gray300: '#c4c0c0',
  gray200: '#dbd9d9',
  gray100: '#f3f5f7',
} as const;

const zIndex = {
  header: 1,
  backdrop: 1,
  modal: 2,
  toast: 4,
} as const;

export const Theme = { color, zIndex };
