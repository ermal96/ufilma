const setColor = (size, sizes) => {
  if (size === "sm") {
    return sizes.sm;
  } else if (size === "md") {
    return sizes.md;
  } else if (size === "lg") {
    return sizes.lg;
  } else {
    return sizes.sm;
  }
};

export default setColor;
