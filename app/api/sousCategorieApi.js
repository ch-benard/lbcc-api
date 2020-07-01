module.exports = (app, db) => {
    app.get('/sousCategories', (req, res) => {
        db.sousCategorie
            .findAll({
                include: 'categorie',
                },
            )
            .then((result) => res.json(result));
    });

    app.get('/sousCategorie/:id', (req, res) =>
        db.sousCategorie
            .findByPk(req.params.id, {
                include: 'categorie',
            })
            .then((result) => res.json(result))
            .catch((err) => {
                console.log('Error while find sousCategorie : ', err);
            })
    );

    app.post('/sousCategorie', (req, res) =>
        db.sousCategorie
            .create({
                ssCatLib: req.body.ssCatLib,
            })
            .then((result) => res.json(result))
    );

    app.put('/sousCategorie/:id', (req, res) =>
        db.sousCategorie
            .update(
                {
                    ssCatLib: req.body.ssCatLib,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            )
            .then((result) => res.json(result))
    );

    app.delete('/sousCategorie/:id', (req, res) =>
        db.sousCategorie
            .destroy({
                where: {
                    id: req.params.id,
                },
            })
            .then((result) => res.json(result))
    );
};
