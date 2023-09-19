const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { required } = require('joi');

require('dotenv').config();

// всё, что закомментировано - можно удалять, это просто пример как было у нас в домашках

const usersRouter = require('./routes/api/users');
// const contactsRouter = require('./routes/api/contacts');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

const productRoutes = require('./routes/api/products');
const productBtBlodTypeRoutes = require('./routes/api/products');

const exercisesRoutes = require('./routes/api/exercises');

const filtersRoutes = require('./routes/api/exercises');

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/products', productRoutes);
app.use('/api/products/byBloodType', productBtBlodTypeRoutes);

app.use('/api/exercises', exercisesRoutes);
app.use('/api/exercises/body-parts', filtersRoutes);
app.use('/api/exercises/equipment', filtersRoutes);
app.use('/api/exercises/muscles', filtersRoutes);


app.use('/api/users', usersRouter);
// app.use('/api/contacts', contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;

  res.status(status).json({ message });
});

module.exports = app;