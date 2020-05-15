function errorHandler(error, req, res, next) {
    if (error.name === "SequelizeUniqueConstraintError") {
        res.status(500).json(error);
    } else {
        res.status(500).json({
            statusCode: 500,
            message: "Erro não tratado!",
            Error: error,
        });
    }
}

module.exports = errorHandler;