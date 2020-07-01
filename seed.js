const db = require('./models'); // connection to the database
const faker = require('faker');
const times = require('lodash.times');
const random = require('lodash.random');

const seed = async () => {
    await db.sequelize.sync();

    // populate categorie table with data
    await db.categorie.bulkCreate([
        { catId: 1, catLib: 'Emploi' },
        { catId: 2, catLib: 'Véhicules' },
        { catId: 3, catLib: 'Immobilier' },
        { catId: 4, catLib: 'Vacances' },
        { catId: 5, catLib: 'Loisirs' },
        { catId: 6, catLib: 'Animaux' },
        { catId: 7, catLib: 'Mode' },
        { catId: 8, catLib: 'Multimédia' },
        { catId: 9, catLib: 'Services' },
        { catId: 10, catLib: 'Maison' },
        { catId: 11, catLib: 'Matériel Professionnel' },
        { catId: 12, catLib: 'Divers' },
    ]);

    // populate sous_categorie table with data
    await db.sousCategorie.bulkCreate([
        { ssCatLib: "Offres d'emplois", catFk: 1 },
        { ssCatLib: "Offres d'emplois cadre", catFk: 1 },
        { ssCatLib: 'Formations Professionnelles', catFk: 1 },
        // Categorie: véhicules
        { ssCatLib: 'Voitures', catFk: 2 },
        { ssCatLib: 'Motos', catFk: 2 },
        { ssCatLib: 'Caravaning', catFk: 2 },
        { ssCatLib: 'Utilistaires', catFk: 2 },
        { ssCatLib: 'Utilitaires', catFk: 2 },
        { ssCatLib: 'Camions', catFk: 2 },
        { ssCatLib: 'Nautisme', catFk: 2 },
        { ssCatLib: 'Equipement auto', catFk: 2 },
        { ssCatLib: 'Equipement moto', catFk: 2 },
        { ssCatLib: 'Equipement caravaning', catFk: 2 },
        { ssCatLib: 'Equipement nautisme', catFk: 2 },
        // Catégorie: immobilier
        { ssCatLib: 'Ventes immobilières', catFk: 3 },
        { ssCatLib: 'Immobilier neuf', catFk: 3 },
        { ssCatLib: 'Locations', catFk: 3 },
        { ssCatLib: 'Colovations', catFk: 3 },
        { ssCatLib: 'Bureaux & commerces', catFk: 3 },
        // Catégorie: vacances
        { ssCatLib: 'Locations & gites', catFk: 4 },
        { ssCatLib: 'Chambres dhôtes', catFk: 4 },
        { ssCatLib: 'Campings', catFk: 4 },
        { ssCatLib: 'Hôtels', catFk: 4 },
        { ssCatLib: 'Ventes privées', catFk: 4 },
        { ssCatLib: 'Vacances', catFk: 4 },
        // Catégorie: Loisirs
        { ssCatLib: 'DVD - Films', catFk: 5 },
        { ssCatLib: 'CD - Musique', catFk: 5 },
        { ssCatLib: 'Livres', catFk: 5 },
        { ssCatLib: 'Vélos', catFk: 5 },
        { ssCatLib: 'Sport & hobbies', catFk: 5 },
        { ssCatLib: 'Instruments de musique', catFk: 5 },
        { ssCatLib: 'Collection', catFk: 5 },
        { ssCatLib: 'Jeux & jouets', catFk: 5 },
        { ssCatLib: 'Vin & gastrossCatLibie', catFk: 5 },
        // Catégorie: Animaux
        { ssCatLib: 'Animaux', catFk: 6 },
        // Catégorie: Mode
        { ssCatLib: 'Vêtements', catFk: 7 },
        { ssCatLib: 'Chaussures', catFk: 7 },
        { ssCatLib: 'Accessoires & bagagerie', catFk: 7 },
        { ssCatLib: 'Montres & bijoux', catFk: 7 },
        { ssCatLib: 'Equipepment bébé', catFk: 7 },
        { ssCatLib: 'Vêtements bébé', catFk: 7 },
        { ssCatLib: 'Luxe et tendance', catFk: 7 },
        // Catégorie: Multimédia
        { ssCatLib: 'Informatique', catFk: 8 },
        { ssCatLib: 'Consoles & jeux vidéo', catFk: 8 },
        { ssCatLib: 'Image & son', catFk: 8 },
        { ssCatLib: 'Téléphonie', catFk: 8 },
        // Catégorie: Services
        { ssCatLib: 'Prestations de services', catFk: 9 },
        { ssCatLib: 'Billeterie', catFk: 9 },
        { ssCatLib: 'Evénements', catFk: 9 },
        { ssCatLib: 'Cours particuliers', catFk: 9 },
        { ssCatLib: 'Covoiturage', catFk: 9 },
        // Catégorie: Maison
        { ssCatLib: 'Ameublement', catFk: 10 },
        { ssCatLib: 'Electroménager', catFk: 10 },
        { ssCatLib: 'Arts de la table', catFk: 10 },
        { ssCatLib: 'Décoration', catFk: 10 },
        { ssCatLib: 'Linge de maison', catFk: 10 },
        { ssCatLib: 'Bricolage', catFk: 10 },
        { ssCatLib: 'Jardinage', catFk: 10 },
        // Catégorie: Matériel professionnel
        { ssCatLib: 'Matériel agricole', catFk: 11 },
        { ssCatLib: 'Transport - manutention', catFk: 11 },
        { ssCatLib: 'BTP - chantier gros-oeuvre', catFk: 11 },
        { ssCatLib: 'Outillage - matériaux 2nd-oeuvre', catFk: 11 },
        { ssCatLib: 'Equipements industriels', catFk: 11 },
        { ssCatLib: 'Restauration - hôtellerie', catFk: 11 },
        { ssCatLib: 'Fouornitures de bureau', catFk: 11 },
        { ssCatLib: 'Commerces & marchés', catFk: 11 },
        { ssCatLib: 'Matériel médical', catFk: 11 },
        // Catégorie: Divers
        { ssCatLib: 'Divers', catFk: 12 },
    ]);

    // populate offreOuDemande table with data
    await db.offreOuDemande.bulkCreate([
        { offreOuDemId: 1, offreOuDemLib: 'Offres' },
        { offreOuDemId: 2, offreOuDemLib: 'Demandes' },
    ]);

    // populate role table with data
    await db.role.bulkCreate([
        { roleId: 1, roleLib: 'admin' },
        { roleId: 2, roleLib: 'user' },
    ]);

    // populate domaine table with dummy data
    await db.domaine.create({
        domaineId: 1,
        domaineLib: 'developpement-durable.gouv.fr',
    });

    await db.domaine.create({
        domaineId: 2,
        domaineLib: 'paysdelaloire.fr',
    });

    // populate user table with dummy data
    await db.user.bulkCreate(
        times(10, () => ({
            login: faker.internet.userName(),
            pass: faker.internet.password(),
            prenom: faker.name.firstName(),
            nom: faker.name.lastName(),
            email: faker.internet.email(),
            roleFk: random(1, 2),
            domaineFk: random(1, 2),
        }))
    );

    db.sequelize
        .close()
        .then(() => {
            console.log('Seed successfull !');
        })
        .catch((error) => console.log(error.message));
};

seed(); // Initialize the database sync.
