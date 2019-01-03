var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Events.findAll({}).then(function(dbevents) {
      res.render("index", {
        msg: "events",
        examples: dbevents
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Events.findOne({ where: { id: req.params.id } }).then(function(dbevents) {
      res.render("example", {
        example: dbevents
      });
    });
  });

  // Load example page
  app.get("/example", function(req, res) {
    db.Events.findAll({}).then(function(dbevents) {
      res.render("example", {
        examples: dbevents
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
