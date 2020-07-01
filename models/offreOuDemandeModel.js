module.exports = (sequelize, DataTypes) => {
    const OffreOuDemande = sequelize.define(
        'offreOuDemande',
        {
            offreOuDemId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            offreOuDemLib: {
                type: DataTypes.STRING(100),
                unique: true,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
    )

    OffreOuDemande.associate = (models) => {
        OffreOuDemande.hasMany(models.annonce, {
            foreignKey: 'offreOuDemFk',
        })
    }

    return OffreOuDemande
}
