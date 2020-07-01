module.exports = (app, db) => {
    // app.get('/categories', (req, res) =>
    //     db.categorie.findAll().then((result) => res.json(result))
    // );

    app.get('/categories', (req, res) => {
        db.categorie
            .findAll({
                include: 'sousCategories',            
            })
            .then((result) => res.json(result));
    });

    app.get('/categorie/:id', (req, res) =>
        db.categorie
            .findByPk(req.params.id, {
                include: 'sousCategories'
            })
            .then((result) => res.json(result))
    );

    app.post('/categorie', (req, res) =>
        db.categorie
            .create({
                catLib: req.body.catLib,
            })
            .then((result) => res.json(result))
    );

    app.put('/categorie/:id', (req, res) =>
        db.categorie
            .update(
                {
                    catLib: req.body.catLib,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            )
            .then((result) => res.json(result))
    );

    app.delete('/categorie/:id', (req, res) =>
        db.categorie
            .destroy({
                where: {
                    id: req.params.id,
                },
            })
            .then((result) => res.json(result))
    );
};
