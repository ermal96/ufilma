import fs from "fs";

export const getAll = async (_, res) => {
  let imagesFolder = "./images/";

  let images = [];
  fs.readdir(imagesFolder, (err, files) => {
    files.forEach((image) => {
      images.push(`images/${image}`);
    });

    return res.status(200).send({
      images,
    });
  });
};
