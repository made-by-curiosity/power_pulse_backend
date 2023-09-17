const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { required } = require('joi');

require('dotenv').config();

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

const productRoutes = require('./routes/api/food');
const productBtBlodTypeRoutes = require('./routes/api/food');

const exercisesRoutes = require('./routes/api/exercises');

const filtersRoutes = require('./routes/api/filters')

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/products', productRoutes);
app.use('/api/products/byBloodType', productBtBlodTypeRoutes);

app.use('/api', exercisesRoutes);

app.use('/api', filtersRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;

  res.status(status).json({ message });
});

module.exports = app;