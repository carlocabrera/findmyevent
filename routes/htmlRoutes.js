var db = require("../models");

module.exports = function(app) {


  // load home page
  app.get("/intro", function(req, res) {
    res.render("intro", {
        msg: "Intro",

    });
  });


  // Load index page
  app.get("/", function(req, res) {
    db.Events.findAll({}).then(function(dbevents) {
      res.render("index", {
        msg: "events",
        examples: dbevents
      });
    });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
