const { logger } = require('../utils/logger');
const { ApiError } = require('../utils/errorHandler');
const { ApiResponse } = require('../utils/responseHandler');
const { AsyncHandler } = require('../middlewares/AsyncHandler');
const {
    uploadImageToCloudinary,
    uploadVideoToCloudinary
} = require('../utils/cloudinary');

const getCurrentUser = AsyncHandler(async (req, res) => {

});

const getAllUsers = AsyncHandler(async (req, res) => {

});

const signUp = AsyncHandler(async (req, res) => {

});

const signIn = AsyncHandler(async (req, res) => {

});

const signOut = AsyncHandler(async (req, res) => {

});

const getChannelDetails = AsyncHandler(async (req, res) => {

});

const getUserProfile = AsyncHandler(async (req, res) => {

});

module.exports = {
    getCurrentUser,
    getAllUsers,
    signUp,
    signIn,
    signOut,
    getChannelDetails,
    getUserProfile
}