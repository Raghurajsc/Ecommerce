const getAllProducts = () => {
    return "Fetching all products";
};

const addProduct = (productName) => {
    return `Product Added: ${productName}`;
};

const getProductById = (id) => {
    return `Fetching product with ID: ${id}`;
};

module.exports = {
    getAllProducts,
    addProduct,
    getProductById
};