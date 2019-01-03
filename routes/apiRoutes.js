var db = require("../models");

module.exports = function(app) {
  // Get all events
  app.get("/api/events", function(req, res) {
    db.Events.findAll({}).then(function(dbevents) {
      res.json(dbevents);
    });
  });

  // Create a new event
  app.post("/api/events", function(req, res) {
    //Test the route for the data
    console.log(req.body);
    //Insert into the database
    db.Events.create(req.body).then(function(dbevents) {
      res.json(dbevents);
    });
  });

  // Delete an event by id
  app.delete("/models/events/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbevents) {
      res.json(dbevents);
    });
  });
};
