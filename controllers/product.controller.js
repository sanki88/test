const Product = require('../models/product.model');

exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: "ksja",
            price: 23
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};