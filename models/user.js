'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.ENUM('F','M')
  }, {
    paranoid: true
  });
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Group, { as: 'Groups', through: 'Role' })
  };
  return User;
};