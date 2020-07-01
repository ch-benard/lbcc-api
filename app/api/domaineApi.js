module.exports = (app, db) => {
    app.get('/domaines', (req, res) =>
        db.domaine
            .findAll({
                include: 'user',
            })
            .then((result) => res.json(result))
    );

    app.get('/domaine/:id', (req, res) =>
        db.domaine.findByPk(req.params.id).then((result) => res.json(result))
    );
};
