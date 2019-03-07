module.exports = function(sequelize, DataTypes) {
  var pokestatus = sequelize.define("pokestatus", {
    pokeName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 15]
      }
    },
    pokethirsty: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    pokesleepy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    pokehungry: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    pokebored: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
  pokestatus.associate = function(models) {
    // console.log("It worked", models)
    pokestatus.belongsTo(models.User);
  };
  return pokestatus;
};
