const AsyncHandler = (requestHandler) => {
    return (req, _, next) => Promise
        .resolve(requestHandler(req, resolve, next))
        .catch((err) => next(err));
}

module.exports = {
    AsyncHandler
}