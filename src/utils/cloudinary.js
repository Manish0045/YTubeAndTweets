const { v2: cloudinary } = require('cloudinary');
const { logger } = require('./logger');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadImageToCloudinary = async (imagePath) => {
    try {
        const response = await cloudinary.uploader.upload(imagePath, {
            folder: "YTube_images"
        });
        console.log(response);
        return response;
    } catch (err) {
        logger.error(`Error while uploading image to cloudinary! ${err.message}`);
        throw err;
    }
}

const uploadVideoToCloudinary = async (videoPath) => {
    try {
        const response = await cloudinary.uploader.upload(videoPath, {
            folder: "YTube_videos"
        });
        console.log(response);
        return response;
    } catch (err) {
        logger.error(`Error while uploading video to cloudinary! ${err.message}`);
        throw err;
    }
}

module.exports = {
    uploadImageToCloudinary,
    uploadVideoToCloudinary
}
