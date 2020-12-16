const setColor = (variant, colors) => {
  if (variant === "primary") {
    return colors.primary;
  } else if (variant === "secondary") {
    return colors.secondary;
  }
};

export default setColor;
