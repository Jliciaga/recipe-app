module.exports.up = ( queryInterface, DataTypes ) => {
    return queryInterface.createTable("chefs", {
        id: { //This ID makes a unique ID.
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        createAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        deletedAt: { // Soft delete, this makes it a possibility to recover deleted data should it be requested.
            allowNull: true,
            type: DataTypes.DATE,
        },
    },
        { charset: "utf8" }); //helps get encoding when working with different languages.
};

module.exports.down = queryInterface => queryInterface.dropTable("chefs");
