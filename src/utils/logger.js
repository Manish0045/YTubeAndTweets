const timeStamps = new Date().toLocaleString();

const logger = {
    info: (message) => console.info(timeStamps, "[Info] : ", message),
    log: (message) => console.log(timeStamps, "[Log] : ", message),
    warn: (message) => console.warn(timeStamps, "[Warning] : ", message),
    error: (message) => console.error(timeStamps, "[Error] : ", message)
};

module.exports = {
    logger
}