const {
    sendResponse,
    sendErrorResponse
} = require("../utils/response");

const getCartForUser = (req, res) => {

    if (!req.params.userId) {
        return sendErrorResponse(res, {
            message: "User ID is required",
            statusCode: 400
        });
    }

    return sendResponse(
        res,
        `Fetching cart for user with ID: ${req.params.userId}`,
        200
    );
};

const addProductToCart = (req, res) => {

    if (!req.params.userId) {
        return sendErrorResponse(res, {
            message: "User ID is required",
            statusCode: 400
        });
    }

    return sendResponse(
        res,
        `Adding product to cart for user with ID: ${req.params.userId}`,
        201
    );
};

module.exports = {
    getCartForUser,
    addProductToCart
};