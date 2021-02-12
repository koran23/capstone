'use strict';
module.exports = (sequelize, DataTypes) => {
  const PhotoSeries = sequelize.define('PhotoSeries', {
    entryId: DataTypes.INTEGER
  }, {});
  PhotoSeries.associate = function(models) {
    // associations can be defined here
  };
  return PhotoSeries;
};