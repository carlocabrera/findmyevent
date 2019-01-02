module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Events", {
      title: DataTypes.STRING,
      start: DataTypes.DATE,
      end: DataTypes.DATE,
    });
    return Event;
  };