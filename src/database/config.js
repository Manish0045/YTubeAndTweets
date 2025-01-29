const mongoose = require('mongoose');
const { logger } = require('../utils/logger');

const connectDB = async () => {
    const DATABASE = process.env.DB_NAME;
    const MONGO_URI = process.env.MONGO_URI;
    if (!MONGO_URI || !DATABASE) {
        throw new Error('MONGO_URI and DATABASE are required in .env file');
    }

    const MONGO_URL = MONGO_URI + DATABASE;
    const maxAttempts = 5;
    let attempt = 0;
    let delay = 1000;
    const maxDelay = 30000;

    while (attempt < maxAttempts) {
        try {
            const connectionInstance = await mongoose.connect(MONGO_URL, { maxPoolSize: 10 });
            logger.info(`Connected to ${connectionInstance.connection.name} database`);
            logger.info(`MongoDB connected on: ${connectionInstance.connection.host}:${connectionInstance.connection.port}`);
            return;
        } catch (error) {
            attempt++;
            logger.error(`Error connecting to database (Attempt ${attempt}): ${error.message}`);

            if (attempt === maxAttempts) {
                logger.error("Max attempts reached...Couldn't connect to database");
                logger.warn('Please check your connections and try again!');
                process.exit(1);
            }

            logger.info(`Retrying in ${delay / 1000} seconds...`);

            await new Promise(resolve => setTimeout(resolve, delay));

            delay = Math.min(delay * 2, maxDelay);
        }
    }
}

module.exports = {
    connectDB
}
