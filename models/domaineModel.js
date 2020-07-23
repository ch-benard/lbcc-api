module.exports = (sequelize, DataTypes) => {
    const Domaine = sequelize.define(
        'domaine',
        {
            domaineId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            domaineLib: {
                type: DataTypes.STRING(75),
                unique: true,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        },
        {
            timestamps: false,
        }
    );

    Domaine.associate = (models) => {
        Domaine.hasMany(models.user, { foreignKey: 'domaineFk' });
    };

    return Domaine;
};
