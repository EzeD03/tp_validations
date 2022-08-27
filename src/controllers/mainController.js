module.exports = {
    index : (req,res) => {
        return res.render("index")
    },
    contact : (req,res) => {
        return res.render("contact")
    },
    music : (req,res) => {
        return res.render("music")
    },
    about : (req,res) => {
        return res.render("about")
    },
    login : (req,res) => {
        return res.render("login")
    },
    admin : (req,res) => {
        return res.render("admin",{
            user : req.query.user
        })
    },
    noEntry : (req,res) => {
        return res.render("noEntry")
    }
}