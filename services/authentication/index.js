const express = require('express'),
  cors = require('cors'),
  dotenv = require('dotenv'),
  helmet = require('helmet'),
  authRoutes = require('./routes/auth.routes'),
  application = express();

// Load environment variables.
dotenv.config();

// Add security headers.
application.use(helmet());

// Cors middleware.
application.use(cors());

// Body parsing middleware.
application.use(express.json());

if (process.env.ENVIRONMENT === 'development') application.use(require('morgan')('dev'));

application.use('/', authRoutes);

application.listen(process.env.PORT, () => console.log('Listening...'));
