const User = require('../models/user.model');
const axios = require('axios').default;

/**
 * Fetches all User resources.
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
exports.getUserResources = async (request, response, next) => {
  let users;
  let errors;

  try {
    users = await User.find();
  } catch (error) {
    error.statusCode = 500;
    errors = error;
  } finally {
    response.status(errors ? errors.statusCode : 200).json({
      success: errors ? false : true,
      data: users ? users : undefined,
      error: errors ? errors.message : undefined,
    });
  }
};

/**
 * Fetches a User resource based on the corresponding id.
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
exports.getUserResourceById = async (request, response, next) => {
  let user;
  let errors;

  try {
    user = await User.findById(request.params.id);

    if (!user) {
      errors = { statusCode: 404, message: 'User not found!' };
    }
  } catch (error) {
    error.statusCode = 500;
    errors = error;
  } finally {
    response.status(errors ? errors.statusCode : 200).json({
      success: errors ? false : true,
      data: user ? user : undefined,
      error: errors ? errors.message : undefined,
    });
  }
};

/**
 * Creates a new User resource.
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
exports.createUserResource = async (request, response, next) => {
  let user;
  let errors;

  try {
    let createdUser = new User({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password,
    });
    user = await createdUser.save();
  } catch (error) {
    error.statusCode = error._message === 'User validation failed' ? 400 : 500;
    errors = error;
  } finally {
    response.status(errors ? errors.statusCode : 201).json({
      success: errors ? false : true,
      data: user ? user : undefined,
      error: errors ? errors.message : undefined,
    });
  }
};

/**
 * Updated a User resource based on the corresponding id.
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
exports.updateUserResource = async (request, response, next) => {
  let user;
  let errors;

  try {
    await User.updateOne(
      { _id: request.params.id },
      {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        password: request.body.password,
      }
    );
    user = await User.findById(request.params.id);

    if (!user) {
      errors = { statusCode: 404, message: 'User not found!' };
    }
  } catch (error) {
    error.statusCode = error._message === 'User validation failed' ? 400 : 500;
    errors = error;
  } finally {
    response.status(errors ? errors.status : 200).json({
      success: errors ? false : true,
      data: user ? user : undefined,
      error: errors ? error.message : undefined,
    });
  }
};

/**
 * Deletes a User resource based on the corresponding id.
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
exports.deleteUserResource = async (request, response, next) => {
  let errors;

  try {
    await User.deleteOne({ _id: request.params.id });
  } catch (error) {
    error.statusCode = 500;
    errors = error;
  } finally {
    response.status(errors ? errors.statusCode : 200).json({
      success: errors ? false : true,
      error: errors ? errors.message : undefined,
    });
  }
};

/**
 * Verifies the Authorization header when the client tries to fetch any User Resource.
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
exports.verifyUserResource = async (request, response, next) => {
  try {
    const verified = await axios.post(
      'http://reverseproxy/api/v1/authentication/verify',
      { email: 'hendersonaustin28@gmail.com', password: 'testing123' },
      {
        headers: request.headers,
      }
    );

    if (!verified) {
      throw new Error();
    }

    next();
  } catch (error) {
    response.status(401).json(error.response ? error.response.data : error.message);
  }
};

exports.signup = (request, response, next) => {};
