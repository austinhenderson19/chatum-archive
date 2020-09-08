const User = require('../models/user.model');

exports.getUserResources = async (request, response, next) => {
  try {
    let users = await User.find();
    response.status(200).json({
      status: true,
      message: 'OK',
      data: users,
    });
  } catch (error) {
    response.status(300).json({
      status: false,
      message: 'NOT OK',
      error,
    });
  }
};
exports.createUserResource = async (request, response, next) => {};
exports.getUserResourceById = async (request, response, next) => {};
exports.updateUserResource = async (request, response, next) => {};
exports.deleteUserResource = async (request, response, next) => {};
