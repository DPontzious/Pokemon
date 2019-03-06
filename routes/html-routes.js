module.exports = function (app) {
    app.get("/", (req, res) => {
        res.render("index");
    });
    app.get("/questions", (req, res) => {
        // res.sendFile(path.join(__dirname, "../views/questions"));
        res.render("questions");
    });
    app.get("/status", (req, res) => {
        res.sendFile(path.join(__dirname, "../../views/layouts/status"));
        res.render("questions");
    });

}

