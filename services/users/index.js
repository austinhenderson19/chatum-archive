const express = require('express'),
  cors = require('cors'),
  dotenv = require('dotenv'),
  userRoutes = require('./routes/user.routes'),
  application = express();

// Load environment variables.
dotenv.config();

// Cors middleware.
application.use(cors());

// Body parsing middleware.
application.use(express.json());

// Request log middleware.
if (process.env.ENVIRONMENT === 'development') application.use(require('morgan')('dev'));

// Connect to the database.
require('./configuration/database')();

application.use('/', userRoutes);

application.listen(4001, () => console.log('Users Service Listening...'));
