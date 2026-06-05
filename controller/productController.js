const path = require("path");
const productService = require("../services/productService");

const {
    sendResponse,
    sendErrorResponse
} = require("../utils/response");

const getAllProducts = (req, res) => {

    return res.sendFile(
        path.join(__dirname, "../views/products.html")
    );
};

const addProduct = (req, res) => {

    if (!req.body.productName) {

        return sendErrorResponse(res, {
            message: "Product name is required",
            statusCode: 400
        });
    }

    console.log(req.body);

    const result = productService.addProduct(
        req.body.productName
    );

    return sendResponse(res, result, 201);
};

const getProductById = (req, res) => {

    if (!req.params.id) {

        return sendErrorResponse(res, {
            message: "Product ID is required",
            statusCode: 400
        });
    }

    const result = productService.getProductById(
        req.params.id
    );

    return sendResponse(res, result, 200);
};

module.exports = {
    getAllProducts,
    addProduct,
    getProductById
};