'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    votes: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
  }, {});
  Vote.associate = function(models) {
    // associations can be defined here
     Vote.belongsTo(models.User, {
      foreignKey: "userId",
    });
     Vote.belongsTo(models.Post, {
      foreignKey: "postId",
    });
  };
  return Vote;
};
