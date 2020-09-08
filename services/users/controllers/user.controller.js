const User = require('../models/user.model');

/**
 * Fetches all User resources.
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
exports.getUserResources = async (request, response, next) => {
  try {
    let users = await User.find();
    response.status(200).json({
      status: true,
      message: 'OK',
      data: users,
    });
  } catch (error) {
    response.status(500).json({
      status: false,
      error,
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
  try {
    let user = await User.findById(request.params.id);
    response.status(200).json({
      status: true,
      message: 'OK',
      data: user,
    });
  } catch (error) {
    response.status(500).json({
      status: false,
      error,
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
  try {
    let user = new User({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password,
    });
    user = await user.save();
    response.status(201).json({
      status: true,
      message: 'OK',
      data: user,
    });
  } catch (error) {
    response.status(500).json({
      status: false,
      error,
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
    let user = await User.findById(request.params.id);
    response.status(201).json({
      status: true,
      message: 'OK',
      data: user,
    });
  } catch (error) {
    response.status(500).json({
      status: false,
      error,
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
  try {
    await User.deleteOne({ _id: request.params.id });
    response.status(201).json({
      status: true,
      message: 'OK',
    });
  } catch (error) {
    response.status(500).json({
      status: false,
      error,
    });
  }
};
