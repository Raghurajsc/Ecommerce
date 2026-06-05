const {
    sendResponse,
    sendErrorResponse
} = require("../utils/response");

const getAllUsers = (req, res) => {
    return sendResponse(
        res,
        "Fetching all users",
        200
    );
};

const addUser = (req, res) => {
    return sendResponse(
        res,
        "Adding a new user",
        201
    );
};

const getUserById = (req, res) => {

    if (!req.params.id) {
        return sendErrorResponse(res, {
            message: "User ID is required",
            statusCode: 400
        });
    }

    return sendResponse(
        res,
        `Fetching user with ID: ${req.params.id}`,
        200
    );
};

module.exports = {
    getAllUsers,
    addUser,
    getUserById
};