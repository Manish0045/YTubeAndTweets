const { app } = require('./app');
const { logger } = require("./utils/logger");
const { connectDB } = require('./database/config');

const startServer = () => {
    const PORT = process.env.PORT || 8000;
    connectDB()
        .then(() => {
            app.listen(PORT, () => {
                logger.log(`Server started on port ${PORT}`);
            });
        })
        .catch((error) => {
            logger.error(`Error while starting server: ${error.message}`);
            process.exit(1);
        });
}

startServer();