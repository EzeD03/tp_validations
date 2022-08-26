const router = require("express").Router()
const {index, admin, about, music, contact, login} = require("../controllers/mainController")

const accessAdmin = require("../middlewares/accessAdmin");

router
    .get("/", index)
    .get("/music", music)
    .get("/about", about)
    .get("/contact", contact)
    .get("/admin", accessAdmin, admin)
    .get("/login", login)

module.exports = router;