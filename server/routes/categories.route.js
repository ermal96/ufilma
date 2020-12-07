const express = require("express");
const router = express.Router();
const categories = require("../controllers/categories.controller");

router.get("/", categories.get);
router.post("/", categories.add);
router.delete("/:slug", categories.delete);
router.put("/:slug", categories.update);

module.exports = router;
