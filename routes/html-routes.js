const reqUser = require("./middleware/reqUser");

module.exports = function (app) {
    app.get("/", (req, res) => {
        res.render("index");
    });
    // app.get("/questions", (req, res) => {
    //     // res.sendFile(path.join(__dirname, "../views/questions"));
    //     res.render("questions");
    // });

    // Character status and interaction page route
    app.get("/status", reqUser, (req, res) => {
        res.render("status");
    });
    app.get("/questions", (req, res) => {

        res.render("questmodal");
    });

}

