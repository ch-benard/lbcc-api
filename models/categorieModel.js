module.exports = (sequelize, DataTypes) => {
    const Categorie = sequelize.define(
        'categorie',
        {
            catId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            catLib: {
                type: DataTypes.STRING(100),
                unique: true,
                allowNull: false,
            },
        },
        {
            name: {
                singular: 'categorie',
                plural: 'categories',
            },
            timestamps: false,
        }
    );

    Categorie.associate = (models) => {
        Categorie.hasMany(models.sousCategorie, { foreignKey: 'catFk' });
    };

    return Categorie;
};
