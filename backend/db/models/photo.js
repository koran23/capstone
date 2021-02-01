'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    url: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    like: DataTypes.BOOLEAN
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
     Photo.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return Photo;
};