const jwt = require('jsonwebtoken');

/**
 * Generates a JSON Web Token for future requests that require authorization.
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
exports.authorize = (request, response, next) => {
  try {
    const { email, password } = request.body;
    const token = jwt.sign({ email, password }, process.env.SECRET, {
      expiresIn: '12h',
    });

    if (!token) {
      throw new Error();
    }

    response.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
    });
  }
};

/**
 * Verifies a JSON Web Token and determines if the user has authorization for the intended route.
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
exports.verify = (request, response, next) => {
  try {
    if (!request.headers.authorization) {
      throw new Error();
    }

    const token = request.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token, process.env.SECRET);

    if (!decode) {
      throw new Error();
    }

    response.status(200).json({
      success: true,
    });
  } catch (error) {
    response.status(401).json({
      success: false,
      message: 'Authentication Failed',
    });
  }
};
