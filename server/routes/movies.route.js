const express = require("express");
const router = express.Router();
const movies = require("../controllers/movies.controller");

router.get("/", movies.get);
router.post("/", movies.add);
router.delete("/:slug", movies.delete);
router.put("/:slug", movies.update);

module.exports = router;
