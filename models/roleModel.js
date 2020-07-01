module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define(
        'role',
        {
            roleId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            roleLib: {
                type: DataTypes.STRING(75),
                unique: true,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
    )

    Role.associate = (models) => {
        Role.hasMany(models.user, {
            foreignKey: 'roleFk',
        })
    }

    return Role
}
