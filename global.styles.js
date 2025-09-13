const breakpointsStyles = '@use "./common/_breakpoints.scss"';
const mixinsStyles = '@use "./common/_mixins.scss"';
const resetStyles = '@use "./common/_reset.scss"';

const styles = [
  breakpointsStyles,
  //   colorsStyles,
  mixinsStyles,
  //   baseStyles,
  resetStyles,
];

export const globalStylesOptions = styles.reduce((acc, i) => acc + i + ';', '');
