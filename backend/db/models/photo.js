'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    url: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    delivered: DataTypes.BOOLEAN,
    like: DataTypes.BOOLEAN
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
     Photo.belongsTo(models.User, {
      foreignKey: "userId",
    });
    Photo.hasMany(models.Comment, {
      foreignKey: "photoId",
    } )
  };
  return Photo;
};