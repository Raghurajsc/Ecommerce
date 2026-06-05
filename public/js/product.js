async function submitForm(e) {
    e.preventDefault();

    const product = e.target.productName.value;

    const obj = {
        productName: product
    };

    const result = await axios.post(
        "http://localhost:4000/products",
        obj
    );

    console.log(result.data);
}