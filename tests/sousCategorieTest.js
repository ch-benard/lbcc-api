const models = require('../models');
const SousCategorie = models.SousCategorie;

// 1:1
// Get the categorie linked to a given sousCategorie
SousCategorie.findOne({
    where: { ssCatId: 1 },
    include: 'category',
})
    .then((findedSousCategorie) => {
        // Get the sousCategorie with Categorie datas included
        console.log(findedSousCategorie);
        // Get the categorie record only
        // console.log(findedSousCategorie.categorie)
    })
    .catch((err) => {
        console.log('Error while find sousCategorie : ', err);
    });
