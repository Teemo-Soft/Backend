'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    names: DataTypes.STRING,
    lastnames: DataTypes.STRING,
    identification: DataTypes.STRING,
    gender: DataTypes.ENUM('M', 'F'),
    username: DataTypes.STRING,
    email: { type: DataTypes.STRING, validate: { isEmail: true } },
    password: DataTypes.STRING,
    facebookId: DataTypes.STRING,
    googleId: DataTypes.STRING
  }, {paranoid: true});
  User.associate = function (models) {
    // associations can be defined here
    User.belongsToMany(models.Group, { as: 'Groups', through: 'Role', foreignKey: 'userId' })
  };
  return User;
};