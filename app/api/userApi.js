module.exports = (app, db) => {
    app.get('/users', (req, res) =>
        db.user
            .findAll({
                include: 'domaine',
            })
            .then((result) => res.json(result))
    );

    app.get('/user/:id', (req, res) =>
        db.user
            .findByPk(req.params.id, {
                include: 'domaine',
            })
            .then((result) => res.json(result))
    );

    app.post('/user', (req, res) =>
        db.user
            .create({
                title: req.body.title,
                content: req.body.content,
            })
            .then((result) => res.json(result))
    );

    app.put('/user/:id', (req, res) =>
        db.user
            .update(
                {
                    prenom: req.body.prenom,
                    nom: req.body.nom,
                    email: req.body.email,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            )
            .then((result) => res.json(result))
    );

    app.delete('/user/:id', (req, res) =>
        db.user
            .destroy({
                where: {
                    id: req.params.id,
                },
            })
            .then((result) => res.json(result))
    );
};
