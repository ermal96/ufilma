import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    console.log(req);
    res.render('index');
});


export const adminRoute =  router;
