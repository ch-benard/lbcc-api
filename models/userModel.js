module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'user',
        {
            userId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            login: {
                type: DataTypes.STRING(75),
                unique: 'loginIndex',
                allowNull: false,
            },
            pass: {
                type: DataTypes.STRING,
                get() {
                    return () => this.getDataValue('password');
                },
            },
            prenom: {
                type: DataTypes.STRING(75),
                unique: false,
                allowNull: false,
            },
            nom: {
                type: DataTypes.STRING(75),
                unique: false,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            salt: {
                type: DataTypes.STRING,
                get() {
                    return () => this.getDataValue('salt');
                },
            },
        },
        {
            timestamps: false,
        }
    );

    User.associate = (models) => {
        User.belongsTo(models.domaine, { foreignKey: 'domaineFk' });
        User.belongsTo(models.role, { foreignKey: 'roleFk' });
        User.hasMany(models.annonce, { foreignKey: 'userFk' });
    };

    return User;
};
