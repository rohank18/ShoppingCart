var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/backend');

var products = [
    new Product({
        imagePath: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/2363916/2018/1/15/11516008221700-BOSS-Green-Men-Navy-Blue-Solid-Polo-Collar-T-shirt-161516008221519-1_mini.jpg',
        title: 'BOSS Green',
        description: 'Solid Polo Collar T-shirt',
        price: 2799
    }),
    new Product({
        imagePath: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/2314372/2018/5/25/ac0a6ad7-baae-4922-b5a2-3de9958c25fa1527233031041-HRX-by-Hrithik-Roshan-Men-Charcoal-Grey-Slim-Advanced-Rapid-Dry-Raglan-T-shirt-5651527233029358-1_mini.jpg',
        title: 'HRX by Hrithik Roshan',
        description: 'Slim Rapid Dry Raglan T-shirt',
        price: 2499
    }),
    new Product({
        imagePath: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/2260360/2017/12/11/11512980139834-The-North-Face-Men-Maroon-Printed-Round-Neck-T-shirt-9851512980139664-1_mini.jpg',
        title: 'The North Face',
        description: 'Printed Round Neck T-shirt',
        price: 1999
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
