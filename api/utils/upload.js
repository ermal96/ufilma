import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date().toISOString() + "-" + file.originalname.replace(/\s/g, "-")
    );
  },
});

export const upload = multer({ storage: storage }).single("image");
