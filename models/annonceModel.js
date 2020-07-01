module.exports = (sequelize, DataTypes) => {
    const Annonce = sequelize.define(
        'annonce',
        {
            annonceId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            titre: {
                type: DataTypes.STRING(100),
                unique: false,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING(100),
                unique: false,
                allowNull: false,
            },
            contenu: {
                type: DataTypes.STRING(100),
                unique: false,
                allowNull: false,
            },
            tel: {
                type: DataTypes.STRING(14),
                unique: false,
                allowNull: false,
            },
            datedebut: {
                type: DataTypes.DATE(),
                unique: false,
                allowNull: false,
            },
            datefin: {
                type: DataTypes.DATE(),
                unique: false,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
    )

    Annonce.associate = (models) => {
        Annonce.belongsTo(models.user, {
            foreignKey: 'userFk',
        })
    }

    Annonce.associate = (models) => {
        Annonce.belongsTo(models.sousCategorie, {
            foreignKey: 'ssCatFk',
        })
    }

    Annonce.associate = (models) => {
        Annonce.belongsTo(models.offreOuDemande, {
            foreignKey: 'offreOuDemFk',
        })
    }

    return Annonce
}
