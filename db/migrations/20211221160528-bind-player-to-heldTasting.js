'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
      const { DataTypes } = Sequelize;
      queryInterface.addColumn("players", "heldTastingId", {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "heldTastings",
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
      queryInterface.removeColumn("players", "heldTastingId");
  }
};