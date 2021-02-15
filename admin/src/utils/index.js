export const isEmptyObject = (value) => {
  return Object.keys(value).length === 0 && value.constructor === Object;
};
