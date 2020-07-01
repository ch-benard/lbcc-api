module.exports = (sequelize, DataTypes) => {
    const SousCategorie = sequelize.define(
        'sousCategorie',
        {
            ssCatId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            ssCatLib: {
                type: DataTypes.STRING(75),
                unique: true,
                allowNull: false,
            },
        },
        {
            name: {
                singular: 'sousCategorie',
                plural: 'sousCategories',
            },
            timestamps: false,
        }
    );

    SousCategorie.associate = (models) => {
        SousCategorie.belongsTo(models.categorie, { foreignKey: 'catFk' });
        SousCategorie.hasMany(models.annonce, { foreignKey: 'ssCatFk' });
    };

    return SousCategorie;
};
