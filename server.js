const express = require('express');
const app = express();
const config = require('config');
var error = config.get('error');
//Init Middleware
app.use(express.json({ extended: false }));

//Define routes
try {
  app.use('/distance', require('./routes/distance'));
  app.use('/area', require('./routes/area'));
  app.use('/volume', require('./routes/volume'));
  app.use('/mass', require('./routes/mass'));
  app.use('/speed', require('./routes/speed'));
  app.use('/time', require('./routes/time'));
  app.use('/force', require('./routes/force'));
  app.use('/pressure', require('./routes/pressure'));
  app.use('/energy', require('./routes/energy'));
  app.use('/power', require('./routes/power'));
  app.use('/temp', require('./routes/temperature'));
  app.use('/data', require('./routes/data'));
} catch (e) {
  console.error(err.message);
  res.status(500).send('Server error');
}
app.all('*', (req, res) => res.status(404).json(error));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started in port ${PORT}`));
