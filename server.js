const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const apiUser = require('./app/api/userApi');
const apiDomaine = require('./app/api/domaineApi');
const apiCategorie = require('./app/api/categorieApi');
const apiSousCategorie = require('./app/api/sousCategorieApi');

const app = express();
app.use(bodyParser.json());
app.use(express.static('app/public'));

apiUser(app, db);
apiDomaine(app, db);
apiCategorie(app, db);
apiSousCategorie(app, db);

app.listen(8050, () => console.log('App listening on port 8050!'));
