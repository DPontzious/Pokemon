const reqUser = require("./middleware/reqUser");
const db = require("../models");

module.exports = function (app) {
    app.get("/", (req, res) => {
        res.render("index");
    });

    // Character status and interaction page route
    app.get("/status", reqUser, (req, res) => {
        // res.render("status")
        console.log("status request")
        db.pokestatus.findOne({
            where: {
                UserId: req.user.id
            }
        }).then(dbStatus => {
            console.log("promise check")
            if (dbStatus) {
                res.render("status", {
                    hasPokemon: true,
                    pokemon: dbStatus
                });
                console.log("Yes", dbStatus)
            } else {
                res.render("status", {
                    hasPokemon: false

                });
                console.log("No", dbStatus)
            }
        })
    });


}

