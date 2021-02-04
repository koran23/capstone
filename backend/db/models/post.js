'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    picture: DataTypes.STRING,
    caption: DataTypes.STRING,
    vote: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
     Post.belongsTo(models.User, {
      foreignKey: "userId",
    });
     Post.hasMany(models.Comment, {
      foreignKey: "postId",
    });
  };
  return Post;
};