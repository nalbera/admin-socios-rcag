const notFoundError = (req, res) => {
    res.status(404).send({
        status: 'ERROR',
        message: 'Not found'
    });
}

export default notFoundError;