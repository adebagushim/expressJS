const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'field nama min 3 max 50'],
        minlength: 3,
        maxlenght: 50
    },
    price: {
        type: Number,
        required: true,
        min: 1000,
        max: 100000000
    },
    stock: Number,
    status: {
        type: Boolean,
        default: true
    },
    image_url: String
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;