const express = require("express");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();
const path=require("path");

app.use(express.json());

app.use(express.static(path.join(__dirname,"public")));


app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});