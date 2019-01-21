'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: DataTypes.STRING
  }, {paranoid: true});
  Group.associate = function(models) {
    // associations can be defined here
    Group.belongsToMany(models.User, { as: 'Users', through: 'Role', foreignKey: 'groupId' })
  };
  return Group;
};