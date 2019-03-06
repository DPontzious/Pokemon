var db = require("../models");
var passport = require("../config/passport");
var question = require("../models/questionsinfo");
module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    console.log(req.user);
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.send("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function () {
      res.redirect(307, "/api/login");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

// route for posting status
app.get("/api/characterstat", function (req, res){
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  }
  else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function () {
      res.redirect(307, "/api/login");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  }
})
// route for getting status


  // app.get("/api/questions", function (req, res) {
  //   res.json(question);
  // })
  // app.post("/api/question", function (req, res) {

  //   questionsinfo.push(req.body);
  // console.log(profiles);

  // var totalArry = []
  // for (let i = 0; i < profiles.length - 1; i++) {
  //   const scoreNum = profiles[i].scores;
  //   const newScore = req.body.scores;

  // console.log(scoreNum);
  //   console.log(newScore);
  //   var total = 0;
  //   for (let i = 0; i < scoreNum.length; i++) {
  //     var diff = scoreNum[i] - newScore[i];
  //     var value = Math.abs(diff);

  //     total += value;

  //   }
  //   totalArry.push(total);
  //   console.log(total);

  // }
  // console.log(totalArry);

  // var iMV = totalArry.indexOf(Math.min.apply(Math, totalArry))
  // var match = profiles[iMV];
  // res.json(match);

  // console.log(match);
  // console.log(iMV)

  // });


  //   app.get("/api/friends", function (req, res) {
  //     res.json(profiles);
  //   });
};
