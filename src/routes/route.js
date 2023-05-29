const { Router } = require("express");
const { PostLogin } = require("../controllers/controller");
const { addUser } = require("../controllers/controller");

const router = Router();

router.post("/login", PostLogin);
router.post("/register", addUser);

module.exports = router;
