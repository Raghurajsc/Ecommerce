const path=require("path");
const productService = require("../services/productService");

const getAllProducts = (req, res) => {
    res.sendFile(path.join(__dirname,"../views/products.html"));
};

const addProduct = (req, res) => {
    console.log(req.body);
    const result = productService.addProduct(
        req.body.productName
    );
    res.send(result);
};

const getProductById = (req, res) => {
    const result = productService.getProductById(req.params.id);
    res.send(result);
};

module.exports = {
    getAllProducts,
    addProduct,
    getProductById
};