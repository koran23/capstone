'use strict';
module.exports = (sequelize, DataTypes) => {
  const Entry = sequelize.define('Entry', {
    photo: DataTypes.STRING,
    title: DataTypes.STRING,
    entry: DataTypes.STRING
  }, {});
  Entry.associate = function(models) {
    // associations can be defined here
  };
  return Entry;
};