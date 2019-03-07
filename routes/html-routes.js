const reqUser = require("./middleware/reqUser");
const db = require("../models");

module.exports = function (app) {
    app.get("/", (req, res) => {
        res.render("index");
    });

    // Character status and interaction page route
    app.get("/status", reqUser, (req, res) => {
        db.pokestatus.findOne({
            where: {
                UserId: req.user.id
            }
        }).then(dbStatus => {
            if (dbStatus) {
                res.render("status", {
                    hasPokemon: true,
                    pokemon: dbStatus
                });
            } else {
                res.render("status", {
                    hasPokemon: false
                });
            }
        })
    });


}

