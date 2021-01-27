import fs from "fs-extra";

export const upload = async (source, destination, res) => {
  try {
    await fs.move(source, `images/${destination.replace(/\s+/g, "-")}`, {
      overwrite: true,
    });
  } catch (err) {
    return res.send({ message: "Upload failed " });
  }
};

export const generateImagePath = (name) => {
  return `images/${name.replace(/\s+/g, "-")}`;
};
