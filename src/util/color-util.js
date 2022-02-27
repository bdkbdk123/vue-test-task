export const isColor = (colorVal) => {
  return CSS.supports("color", colorVal);
};
