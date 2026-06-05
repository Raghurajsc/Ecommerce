const sendErrorResponse = (res, err) => {

    return res.status(err.statusCode).json({
        message: err.message,
        status: false
    });
};

const sendResponse = (res, data, statusCode) => {

    return res.status(statusCode).json({
        data: data,
        status: true
    });
};

module.exports = {
    sendErrorResponse,
    sendResponse
};