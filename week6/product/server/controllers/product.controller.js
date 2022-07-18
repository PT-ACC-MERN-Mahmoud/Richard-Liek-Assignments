
const {Product} = require("../models/product.model")


module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => {
            res.json(newProduct);
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong in create product', error: err });
        });
}


module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json({ products : allProducts })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong in all products', error: err })
        });
}

module.exports.getProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(getProduct => {
            res.json({ product : getProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong get product', error: err })
        });
}


module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json({ product: updatedProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong update product', error: err })
        });
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong delete', error: err })
        });
}
