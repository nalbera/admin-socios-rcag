
const handleError = (error, req, res, next) => {
    res.status(error.httpStatus || 500).send({
        status: 'ERROR',
        message: error.message
    });
}

export default handleError;