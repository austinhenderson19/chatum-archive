const express = require('express'),
  application = express(),
  cors = require('cors'),
  helmet = require('helmet'),
  dotenv = require('dotenv');

// Load environment variables.
dotenv.config();

// Add security headers.
application.use(helmet());

// Cors middleware.
application.use(cors());

// Body parsing middleware.
application.use(express.json());

application.post('/events', (request, response, next) => {
  response.status(503).send();
});

application.listen(process.env.PORT, () => console.log('Listening...'));
