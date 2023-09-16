const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { required } = require('joi');

require('dotenv').config();

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

const productRoutes = require('./routes/api/food');
const productBtBlodType = require('./routes/api/food');
const exercisesRoutes = require('./routes/api/exercises');

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/products', productRoutes);
app.use('/api/products/byBloodType', productBtBlodType);
app.use('/api/exercises', exercisesRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;

  res.status(status).json({ message });
});

module.exports = app;