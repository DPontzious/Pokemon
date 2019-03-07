module.exports = function (sequelize, DataTypes) {
    var PokemonFinder = sequelize.define("PokemonFinder", {

        position: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        species: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        weight: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        base_experience: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        numorder: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isdault: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    return PokemonFinder;
};