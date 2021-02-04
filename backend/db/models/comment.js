'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER,

  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
     Comment.belongsTo(models.User, {
      foreignKey: "userId",
    });
     Comment.belongsTo(models.Post, {
      foreignKey: "postId",
    });
     Comment.belongsTo(models.Photo, {
      foreignKey: "photoId",
    });
  };
  return Comment;
};