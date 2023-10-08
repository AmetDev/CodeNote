const Router = require("express");
const db = require("./db");
const router = new Router();
const authController = require("./authController");
router.post("/registration", authController.registration);
router.post("/login", authController.login);
router.get("/users", authController.getUsers);

module.exports = router;
