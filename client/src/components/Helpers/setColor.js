const setColor = (variant, colors) => {
  if (variant === "primary") {
    return colors.primary;
  } else if (variant === "secondary") {
    return colors.secondary;
  } else if (variant === "light") {
    return colors.main;
  } else {
    return colors.main;
  }
};

export default setColor;
