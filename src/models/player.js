const { DataTypes, Model } = require("sequelize");

class Player extends Model {
    static init(sequelize) {
        const structure = {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            heldTastingId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        };

        super.init(structure, { modelName: "player", sequelize });
    }
}

module.exports = Player;
