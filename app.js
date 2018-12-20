const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
const speciesRouter = require('./routes/species');
const researchRouter = require('./routes/research');
const aniRouter = require('./routes/animals');
const habRouter = require('./routes/habitats');
const tagRouter = require('./routes/taggings');
const sightRouter = require('./routes/sightings')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/species', speciesRouter);
app.use('/research', researchRouter);
app.use('/animals', aniRouter);
app.use('/habitats', habRouter);
app.use('/taggings', tagRouter);
app.use('/sightings', sightRouter);

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(port, () => {
  console.log(`Listening to port ${port}.`);
});
