'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
     Comment.belongsTo(models.User, {
      foreignKey: "userId",
    });
     Comment.belongsTo(models.Post, {
      foreignKey: "postId",
    });
  };
  return Comment;
};