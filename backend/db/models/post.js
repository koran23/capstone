'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    picture: DataTypes.STRING,
    vote: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
     Post.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return Post;
};