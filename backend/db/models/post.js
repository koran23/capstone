'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    picture: DataTypes.STRING,
    caption: DataTypes.TEXT,
    profilePic: DataTypes.STRING,
    username: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    vote: DataTypes.INTEGER,
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
     Post.belongsTo(models.User, {
      foreignKey: "userId",
    });
     Post.hasMany(models.Comment, {
      foreignKey: "postId",
    });
     Post.hasMany(models.Vote, {
      foreignKey: "postId",
    });
  };
  return Post;
};