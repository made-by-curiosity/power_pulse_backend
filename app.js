const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

require('dotenv').config();

const { swaggerOptions } = require('./config');

const usersRouter = require('./routes/api/users');
const authRouter = require('./routes/api/auth');
const diaryRouter = require('./routes/api/diary');
const statisticsRouter = require('./routes/api/statistics');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

const swaggerDocs = swaggerJsdoc(swaggerOptions);

const productRoutes = require('./routes/api/products');
const productBtBlodTypeRoutes = require('./routes/api/products');

const exercisesRoutes = require('./routes/api/exercises');

const filtersRoutes = require('./routes/api/exercises');

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);

app.use('/api/diary', diaryRouter);

app.use('/api/products', productRoutes);
app.use('/api/products/byBloodType', productBtBlodTypeRoutes);

app.use('/api/exercises', exercisesRoutes);
app.use('/api/exercises/body-parts', filtersRoutes);
app.use('/api/exercises/equipment', filtersRoutes);
app.use('/api/exercises/muscles', filtersRoutes);

app.use('/api/statistics', statisticsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;

  res.status(status).json({ message });
});

module.exports = app;
