export const slugify = (str, after) => {
    const strAfter = after ? "-" + after : "";

    return str.split(" ").join("-") + strAfter;
  };