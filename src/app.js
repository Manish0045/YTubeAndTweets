const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
// const passport = require('passport');
const { logger } = require('./utils/logger');
const cookieParser = require('cookie-parser');
const { default: mongoose } = require('mongoose');

const app = express();

app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: true, limit: '50kb' }));

app.use(cors({ origin: process.env.CORS_ORIGIN }));
// app.use(passport());
app.use(helmet());
app.use(cookieParser());

app.use('/api', require('./routes/global'));

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Server Error";

    logger.error(`STATUS_CODE: ${statusCode} MESSAGE: ${message}`);

    return res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message: message,
    });
});

process.on('SIGINT', async () => {
    logger.info("System Terminating..Forcefully server closed!");
    try {
        await mongoose.connection.close();
        logger.info("Database connection closed!");
    } catch (error) {
        logger.error("Error while closing database..Something went wrong!");
        process.exit(1);
    }
});

module.exports = {
    app
}