"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, 'IPhone 10', 'Telefon', 10000), new Product_1.Product(2, 'IPhone 11', 'Telefon', 11000), new Product_1.Product(3, 'IPhone 12', 'Telefon', 12000), new Product_1.Product(4, 'IPhone 13', 'Telefon', 13000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
